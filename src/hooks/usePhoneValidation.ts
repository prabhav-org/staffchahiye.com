import { useState } from 'react';
import { validateIndianPhone } from '../utils/validation';

export const usePhoneValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone: string): boolean => {
    const isValid = validateIndianPhone(phone);
    
    if (!isValid) {
      setPhoneError('Please enter a valid Indian phone number');
      return false;
    }
    
    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone);
    if (phoneError) {
      // Clear error when user starts typing
      setPhoneError('');
    }
  };

  const clearPhoneError = () => {
    setPhoneError('');
  };

  return {
    phoneNumber,
    phoneError,
    setPhoneNumber,
    validatePhone,
    handlePhoneChange,
    clearPhoneError,
  };
}; 