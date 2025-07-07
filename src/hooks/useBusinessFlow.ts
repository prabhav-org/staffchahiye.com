import { useState } from 'react';
import { toast } from 'sonner';
import { 
  submitVacancy, 
  sendOtp, 
  verifyOtp, 
  continueToPayment,
} from '../utils/api';
import type { VacancyForm } from '../components/forms/types';

export type FlowStep = 'form' | 'otp' | 'payment' | 'completed';

interface BusinessFlowState {
  currentStep: FlowStep;
  recordId: string | null;
  phoneNumber: string | null;
  paymentUrl: string | null;
  isProcessing: boolean;
  sessionId: string | null;
}

export const useBusinessFlow = () => {
  const [state, setState] = useState<BusinessFlowState>({
    currentStep: 'form',
    recordId: null,
    phoneNumber: null,
    paymentUrl: null,
    isProcessing: false,
    sessionId: null,
  });


  
  // Step 1: Submit form
  const handleFormSubmit = async (formData: VacancyForm): Promise<boolean> => {
    setState(prev => ({ ...prev, isProcessing: true }));
    
    try {
      const result = await submitVacancy(formData);
      console.log('Result from useBusinessFlow:', result);
    
      if (result.success && result.data?.recordId && result.data?.sessionId  && result.data?.phoneNumber) {
        setState(prev => ({
          ...prev,
          currentStep: 'otp',
          recordId: result.data!.recordId,
          sessionId: result.data!.sessionId,
          isProcessing: false,
          phoneNumber: result.data!.phoneNumber,
        }));
        // ✅ Store critical values in localStorage immediately
        localStorage.setItem('business_sessionId',  result.data?.sessionId);
     


        
        toast.success(result.message);

        
      
        return true;
      } else {
        toast.error(result.message);
        setState(prev => ({ ...prev, isProcessing: false }));
        return false
      
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again.');
      setState(prev => ({ ...prev, isProcessing: false }));
     return false
    }
  };

  // Step 2: Send OTP
  const handleSendOtp = async (phoneNumber: string ): Promise<boolean> => {
    setState(prev => ({ ...prev, isProcessing: true }));
    console.log('Sending OTP to:', phoneNumber);
   const sessionId = localStorage.getItem('business_sessionId');
      localStorage.setItem('business_phoneNumber',phoneNumber);
   
    try {
      const result = await sendOtp(phoneNumber, sessionId!);

      console.log(result," send otp");
      
      
      if (result.success) {
        toast.success(result.message);
        setState(prev => ({ ...prev, isProcessing: false }));
        // Safely extract verificationId from API response
        const verificationId = (result.data as { verificationId?: string } | undefined)?.verificationId;
        console.log(verificationId, "verificationId check");
        if (verificationId) {
          localStorage.setItem('verificationId', verificationId);
        }
        return true;
      } else {
        toast.error(result.message);
        setState(prev => ({ ...prev, isProcessing: false }));
        return false;
      }
    } catch (error) {
      console.error('OTP send error:', error || error);
      toast.error('Failed to send OTP. Please try again.');
      setState(prev => ({ ...prev, isProcessing: false }));
      return false;
    }
  };

  // Step 3: Verify OTP
  const handleVerifyOtp = async (otp: string): Promise<boolean> => {
    const verificationId = localStorage.getItem('verificationId')
 
     const phoneNumber =   localStorage.getItem('business_phoneNumber');

    // if (phoneNumber) {
    //   toast.error('Phone number not found. Please restart the process.');
    //   return false;
    // }

    setState(prev => ({ ...prev, isProcessing: true }));
    const sessionId = localStorage.getItem('business_sessionId');

    console.log(otp , phoneNumber, verificationId,sessionId ,"dsta rewutdt")
    
    
    try {
      const result = await verifyOtp(phoneNumber!, otp, sessionId!, verificationId!);
      
      if (result.success) {
        toast.success(result.message);
        setState(prev => ({ 
          ...prev, 
          currentStep: 'payment',
          isProcessing: false 
        }));
        localStorage.removeItem("verificationId")
        return true;
      } else {
        toast.error(result.message);
        setState(prev => ({ ...prev, isProcessing: false }));
        return false;
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      toast.error('Failed to verify OTP. Please try again.');
      setState(prev => ({ ...prev, isProcessing: false }));
      return false;
    }
  };

  // Step 4: Continue to payment
  const handleContinueToPayment = async (amount: number): Promise<boolean> => {
    const phoneNumber = localStorage.getItem('business_phoneNumber');
    if (!phoneNumber) {
      toast.error('Phone number not found. Please restart the process.');
      return false;
    }
    const redirectUrl = `${window.location.origin}/payment-success`;

    setState(prev => ({ ...prev, isProcessing: true }));
    
    try {
      const result = await continueToPayment(amount, phoneNumber, redirectUrl);
      
      // Extract redirectUrl in a type-safe way (API response returns data.data.redirectUrl)
      const redirectUrlFromApi = (result.data as { data?: { redirectUrl?: string } } | undefined)?.data?.redirectUrl;
      if (result.success && redirectUrlFromApi) {
        setState(prev => ({
          ...prev,
          currentStep: 'completed',
          paymentUrl: redirectUrlFromApi,
          isProcessing: false,
        }));
        
        toast.success(result.message);
        
        // Redirect to payment URL
        window.location.href = redirectUrlFromApi;
        
        return true;
      } else {
        toast.error(result.message || 'Failed to get payment URL.');
        setState(prev => ({ ...prev, isProcessing: false }));
        return false;
      }
    } catch (error) {
      console.error('Payment initialization error:', error);
      toast.error('Failed to initialize payment. Please try again.');
      setState(prev => ({ ...prev, isProcessing: false }));
      return false;
    }
  };

  // Reset flow
  const resetFlow = () => {
    setState({
      currentStep: 'otp',
      recordId: null,
      phoneNumber: null,
      paymentUrl: null,
      isProcessing: false,
      sessionId: null,
    });
  };

  // Go back to previous step
  const goBack = () => {
    switch (state.currentStep) {
      case 'otp':
        setState(prev => ({ ...prev, currentStep: 'form' }));
        break;
      case 'payment':
        setState(prev => ({ ...prev, currentStep: 'otp' }));
        break;
      case 'completed':
        setState(prev => ({ ...prev, currentStep: 'payment' }));
        break;
      default:
        break;
    }
  };

  return {
    // State
    currentStep: state.currentStep,
    recordId: state.recordId,
    phoneNumber: state.phoneNumber,
    paymentUrl: state.paymentUrl,
    isProcessing: state.isProcessing,
    sessionId: state.sessionId,
    
    // Actions
    handleFormSubmit,
    handleSendOtp,
    handleVerifyOtp,
    handleContinueToPayment,
    resetFlow,
    goBack,
  };
}; 