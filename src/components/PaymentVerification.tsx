import { verifyPayment } from '@/utils/api';
import React, { useCallback, useEffect, useState } from 'react';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentVerification = () => {
  const [paymentStatus, setPaymentStatus] = useState('verifying'); // 'verifying', 'success', 'failed', 'delayed'
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  const fetchPaymentStatus = useCallback(async () => {
    const orderId = localStorage.getItem('orderId');
    
    if (!orderId) {
      setPaymentStatus('failed');
      setMessage('Order ID not found. Please try again.');
      return;
    }

    try {
      const response = await verifyPayment(orderId);
      
      if (response.success) {
        setPaymentStatus('success');
        setMessage('Payment verified successfully!');
        
        // Start countdown and redirect
        const timer = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              // Redirect to dashboard using navigate
              navigate('/dashboard');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

      } else {
        setPaymentStatus('delayed');
        setMessage('Payment verification pending. Your account will be credited within 24 hours if payment was successful.');
      }
    } catch (error) {
      setPaymentStatus('failed');
      setMessage('Payment verification failed. Please try again or contact support.');
      console.error('Payment verification error:', error);
    }
  }, []);

  useEffect(() => {
    fetchPaymentStatus();
  }, [fetchPaymentStatus]);

  const SpinnerIcon = () => (
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
  );

  const StatusIcon = () => {
    switch (paymentStatus) {
      case 'success':
        return <CheckCircle className="h-16 w-16 text-green-500 animate-pulse" />;
      case 'failed':
        return <XCircle className="h-16 w-16 text-red-500 animate-pulse" />;
      case 'delayed':
        return <Clock className="h-16 w-16 text-yellow-500 animate-pulse" />;
      default:
        return <SpinnerIcon />;
    }
  };

  const getStatusColor = () => {
    switch (paymentStatus) {
      case 'success':
        return 'from-green-400 to-green-600';
      case 'failed':
        return 'from-red-400 to-red-600';
      case 'delayed':
        return 'from-yellow-400 to-yellow-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  const getBackgroundPattern = () => {
    switch (paymentStatus) {
      case 'success':
        return 'bg-gradient-to-br from-green-50 to-green-100';
      case 'failed':
        return 'bg-gradient-to-br from-red-50 to-red-100';
      case 'delayed':
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100';
      default:
        return 'bg-gradient-to-br from-blue-50 to-blue-100';
    }
  };

  const retryPayment = () => {
    setPaymentStatus('verifying');
    setMessage('');
    setCountdown(3);
    fetchPaymentStatus();
  };

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 ${getBackgroundPattern()} transition-all duration-1000`}>
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105">
          {/* Status Icon */}
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full bg-gradient-to-r ${getStatusColor()} shadow-lg`}>
              <div className="bg-white rounded-full p-2">
                <StatusIcon />
              </div>
            </div>
          </div>

          {/* Status Message */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {paymentStatus === 'verifying' && 'Verifying Payment'}
              {paymentStatus === 'success' && 'Payment Successful!'}
              {paymentStatus === 'failed' && 'Verification Failed'}
              {paymentStatus === 'delayed' && 'Payment Pending'}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {paymentStatus === 'verifying' && 'Please wait while we verify your payment...'}
              {message && message}
            </p>
          </div>

          {/* Progress Bar for Verifying State */}
          {paymentStatus === 'verifying' && (
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>
            </div>
          )}

          {/* Success Redirect Countdown */}
          {paymentStatus === 'success' && (
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Redirecting to dashboard in {countdown} seconds...
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {paymentStatus === 'success' && (
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Go to Dashboard Now
              </button>
            )}

            {paymentStatus === 'failed' && (
              <button
                onClick={retryPayment}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Retry Verification
              </button>
            )}

            {paymentStatus === 'delayed' && (
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Continue to Dashboard
              </button>
            )}

            {/* Secondary Action */}
            <button
              onClick={() => navigate('/support')}
              className="w-full text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-white bg-opacity-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600">
            Having trouble? Our support team is here to help 24/7
          </p>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${getStatusColor()} rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PaymentVerification;