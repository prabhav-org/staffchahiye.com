import React, { useState } from 'react';

interface OtpRequestFormProps {
  onSendOtp: (phoneNumber: string) => Promise<boolean>;
  isProcessing: boolean;
}

export const OtpRequestForm: React.FC<OtpRequestFormProps> = ({
  onSendOtp,
  isProcessing,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      await onSendOtp(phoneNumber);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Request OTP
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter 10-digit phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-center text-lg tracking-widest"
            maxLength={10}
            disabled={isProcessing}
          />
        </div>

        <button
          type="submit"
          disabled={phoneNumber.length !== 10 || isProcessing}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Sending...' : 'Send OTP'}
        </button>
      </form>
    </div>
  );
}; 