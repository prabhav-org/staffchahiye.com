import React from 'react';
import { ArrowLeft, CreditCard, Shield, Clock } from 'lucide-react';

interface PaymentStepProps {
  onContinue: () => Promise<boolean>;
  onBack: () => void;
  isProcessing: boolean;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({
  onContinue,
  onBack,
  isProcessing,
}) => {
  return (
    <div className="max-w-md mx-auto p-6">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete your payment
        </h2>
        <p className="text-gray-600">
          Secure payment to start your hiring process
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Service Fee</h3>
          <span className="text-2xl font-bold text-orange-500">₹499</span>
        </div>
        
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Shield size={16} className="mr-2 text-green-500" />
            <span>Pre-screened candidates</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-green-500" />
            <span>30-minute hiring guarantee</span>
          </div>
          <div className="flex items-center">
            <CreditCard size={16} className="mr-2 text-green-500" />
            <span>Secure payment via PhonePe</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onContinue}
          disabled={isProcessing}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </>
          ) : (
            'Proceed to Payment'
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          By proceeding, you agree to our terms of service and privacy policy
        </p>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Payment will be processed securely via PhonePe</li>
          <li>• You'll receive candidate profiles within 30 minutes</li>
          <li>• Connect directly with candidates via WhatsApp</li>
          <li>• Start your hiring process immediately</li>
        </ul>
      </div>
    </div>
  );
}; 