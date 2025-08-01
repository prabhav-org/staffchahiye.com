import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Shield, Clock, Loader2 } from 'lucide-react';

interface PaymentStepProps {
  onContinue: (amount : number) => Promise<boolean>;
  onBack: () => void;
  isProcessing: boolean;
  initialAmount: number;
}



export const PaymentStep: React.FC<PaymentStepProps> = ({
  onContinue,
  onBack,
  isProcessing,
  initialAmount,
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // In a real app, this would come from an API or a config file.
  const availableCoupons = [
    { code: 'BHAVESH150', discount: 150 },
    { code: 'BH150', discount: 150 },
  ];

  

  // This simulates a backend API call to validate the coupon
  const validateCouponAPI = (code: string): Promise<{ valid: boolean; discount: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const appliedCoupon = availableCoupons.find(
          (c) => c.code.toUpperCase() === code.toUpperCase()
        );
        if (appliedCoupon) {
          resolve({ valid: true, discount: appliedCoupon.discount });
        } else {
          resolve({ valid: false, discount: 0 });
        }
      }, 1000); // Simulate network delay
    });
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return;

    // Reset state before applying new coupon
    setIsApplyingCoupon(true);
    setCouponError('');
    setIsCouponApplied(false);
    setAmount(initialAmount); // Reset amount before applying

    const result = await validateCouponAPI(couponCode);
    if (result.valid) {
      const newAmount = Math.max(0, initialAmount - result.discount);
      setAmount(newAmount);
      setDiscount(result.discount);
      setIsCouponApplied(true);
    } else {
      setCouponError('Invalid coupon code. Please try again.');
    }
    setIsApplyingCoupon(false);
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
          Complete your payment
        </h2>
        <p className="text-gray-600">
          Secure payment to start your hiring process
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Service Fee</h3>
          <span className="text-lg font-semibold text-gray-900">₹{initialAmount}</span>
        </div>
        
        {isCouponApplied && (
          <div className="flex items-center justify-between mb-4 text-green-600">
            <h3 className="font-semibold">Discount</h3>
            <span className="font-semibold">- ₹{discount}</span>
          </div>
        )}

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Total to Pay</h3>
            <span className="text-2xl font-bold text-orange-500">₹{amount}</span>
        </div>
        
        <div className="space-y-3 text-sm text-gray-600 mt-6">
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
        <div>
          <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
            Have a coupon code?
          </label>
          <div className="flex items-center">
            <input
              id="coupon"
              name="coupon"
              type="text"
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value);
                setCouponError(''); // Clear error on new input
              }}
              placeholder="Enter coupon code"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-orange-500 focus:border-orange-500 outline-none"
              disabled={isProcessing || isApplyingCoupon}
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              disabled={!couponCode || isProcessing || isApplyingCoupon}
              className="w-24 px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isApplyingCoupon ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Apply'
              )}
            </button>
          </div>
          {couponError && <p className="mt-2 text-sm text-red-600">{couponError}</p>}
          {isCouponApplied && <p className="mt-2 text-sm text-green-600">Coupon applied successfully!</p>}
        </div>
        
        <button
          onClick={() => onContinue(amount)}
          disabled={isProcessing}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </>
          ) : (
            `Proceed to Pay ₹${amount}`
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