import { useState } from 'react';
import { toast } from 'sonner';
import { submitVacancy } from '../utils/api';
import type { VacancyForm } from '../components/forms/types';

export const useVacancySubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: VacancyForm): Promise<boolean> => {
    setIsSubmitting(true);
    
    try {
      const result = await submitVacancy(data);
      
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
  };
}; 