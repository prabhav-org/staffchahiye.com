import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { VacancyForm } from './forms/VacancyForm';
import { OtpVerification } from './OtpVerification';
import { PaymentStep } from './PaymentStep';
import { useBusinessFlow } from '../hooks/useBusinessFlow';
import type { VacancyModalProps } from './forms/types';


export const VacancyModal: React.FC<VacancyModalProps> = ({ 
  isOpen, 
  onClose,
  initialPhone
}) => {
  const {
    currentStep,
    phoneNumber,
    isProcessing,
    handleFormSubmit,
    handleSendOtp,
    handleVerifyOtp,
    handleContinueToPayment,
    resetFlow,
    goBack,
  } = useBusinessFlow();

  const handleClose = () => {
    resetFlow();
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'form':
        return (
          <VacancyForm 
            initialPhone={initialPhone}
            onSubmit={handleFormSubmit}
            handleSendOtp={handleSendOtp}
          />
        );
      
      case 'otp':
        return phoneNumber ? (
          <OtpVerification
            phoneNumber={phoneNumber}
            onVerify={handleVerifyOtp}
            onSendOtp={ handleSendOtp}
            onBack={goBack}
            isProcessing={isProcessing}
          />
        ) : null;
      
      case 'payment':
        return (
          <PaymentStep
            onContinue={handleContinueToPayment}
            onBack={goBack}
            isProcessing={isProcessing}
            initialAmount={799}
          />
        );
      
      case 'completed':
        return (
          <div className="max-w-md mx-auto p-6 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Payment initiated!
              </h2>
              <p className="text-gray-600">
                Please complete your payment to receive candidate profiles within 30 minutes.
              </p>
            </div>
            
            <button
              onClick={handleClose}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Close
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-backdrop" />
        <Dialog.Content className="modal-container">
          <Dialog.Close asChild>
            <button 
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </Dialog.Close>
          
          {renderStep()}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}; 