import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface OtpVerificationProps {
  phoneNumber: string;
  onVerify: (otp: string) => Promise<boolean>;
  onSendOtp: (phoneNumber: string) => Promise<boolean>;
  onBack: () => void;
  isProcessing: boolean;
}

export const OtpVerification: React.FC<OtpVerificationProps> = ({
  phoneNumber,
  onVerify,
  onSendOtp,
  onBack,
  isProcessing,
}) => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(false);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  // Start countdown when component mounts
  useEffect(() => {
    setCountdown(30);
  }, []);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      try {
        const response = await axios.post('/api/otp/verify', { otp, phoneNumber });
        if (response.data.success) {
          const paymentResponse = await axios.post('/api/continue-to-payment', { phoneNumber });
          if (paymentResponse.data.paymentLink) {
            window.location.href = paymentResponse.data.paymentLink;
          } else {
            alert('Failed to generate payment link. Please try again.');
          }
        } else {
          alert('OTP verification failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during OTP verification or payment link generation:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const handleResendOtp = async () => {
    setCanResend(false);
    setCountdown(30);
    await onSendOtp(phoneNumber);
  };

  const formatPhoneNumber = (phone: string) => {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  };

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
          Verify your phone number
        </h2>
        <p className="text-gray-600">
          We've sent a 6-digit code to {formatPhoneNumber(phoneNumber)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
            Enter OTP
          </label>
          <input
            id="otp"
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-center text-lg tracking-widest"
            maxLength={6}
            disabled={isProcessing}
          />
        </div>

        <button
          type="submit"
          disabled={otp.length !== 6 || isProcessing}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">
          Didn't receive the code?
        </p>
        <button
          onClick={handleResendOtp}
          disabled={!canResend || isProcessing}
          className="flex items-center justify-center w-full text-orange-500 hover:text-orange-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw size={16} className={`mr-2 ${!canResend ? 'animate-spin' : ''}`} />
          {canResend ? 'Resend OTP' : `Resend in ${countdown}s`}
        </button>
      </div>
    </div>
  );
}; 