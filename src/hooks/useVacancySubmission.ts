import { useState } from 'react';
import { toast } from 'sonner';
import { submitVacancy } from '../utils/api';
import type { VacancyForm } from '../components/forms/types';
import { sendOtp, verifyOtp } from '../utils/api';

export const useVacancySubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [verificationId, setVerificationId] = useState<string>('');

  const handleSubmit = async (data: VacancyForm): Promise<object> => {
    setIsSubmitting(true);
    
    try {
      const result = await submitVacancy(data);
      console.log('Result:', result);
      
      if (result && typeof result === 'object' && 'success' in result) {
        if (result.success) {
          toast.success(result.message);
          if (result.data?.sessionId) {
            setSessionId(result.data.sessionId);
          }
          return { success: true, data: result };
        } else {
          toast.error(result.message);
          return {
            success: false,
            data:result,
          };
        }
      } else {
        throw new Error('Unexpected result format');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Connection failed, please try again');
      return {
        success: false,
        data:null,
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendOtp = async (phoneNumber: string): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      const result = await sendOtp(phoneNumber, sessionId);
      console.log('Result:', result);
      
      if (result.success) {
        toast.success(result.message);
        const otpInfo = result.data as { verificationId?: string };
        if (otpInfo?.verificationId) {
          setVerificationId(otpInfo.verificationId);
        }
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Connection failed, please try again');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (phoneNumber: string, otp: string): Promise<boolean> => {
    setIsSubmitting(true);
    
    try {
      const result = await verifyOtp(phoneNumber, otp, sessionId, verificationId);
      console.log('Result:', result);
      
      if (result.success) {
        toast.success(result.message);
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Connection failed, please try again');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
    handleSendOtp,
    handleVerifyOtp,
  };
};