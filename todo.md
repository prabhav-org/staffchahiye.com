  Here's what you need to implement in your frontend:

  📱 Frontend Implementation Code

  1. Update your OTP verification success handler:

  // After successful OTP verification
  async function handleOtpVerificationSuccess(sessionKey) {
    try {
      // Step 1: Get the Airtable record information
      console.log('Getting record info for session:', sessionKey);

      const recordResponse = await fetch('/api/business/get-record-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionKey: sessionKey
        })
      });

      const recordData = await recordResponse.json();
      console.log('Record info response:', recordData);

      if (!recordData.success) {
        console.error('Failed to get record info:', recordData.error);
        // Show error message to user
        alert('Failed to get payment information. Please try again.');
        return;
      }

      // Step 2: Create payment order with the Airtable record ID
      console.log('Creating payment order with record ID:', recordData.airtableRecordId);

      const paymentResponse = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: 1000,  // Adjust amount as needed
          redirectUrl: `${window.location.origin}/payment/success`,
          phoneNumber: recordData.phoneNumber,
          airtableRecordId: recordData.airtableRecordId,  // CRITICAL!
          city: recordData.city  // CRITICAL!
        })
      });

      const paymentData = await paymentResponse.json();
      console.log('Payment creation response:', paymentData);

      if (paymentData.success && paymentData.data && paymentData.data.redirectUrl) {
        console.log('Redirecting to payment:', paymentData.data.redirectUrl);
        // Redirect to PhonePe payment page
        window.location.href = paymentData.data.redirectUrl;
      } else {
        console.error('Failed to create payment order:', paymentData.error || paymentData);
        // Show error message to user
        alert('Failed to create payment. Please try again.');
      }

    } catch (error) {
      console.error('Error in payment flow:', error);
      // Show error message to user
      alert('An error occurred during payment setup. Please try again.');
    }
  }

  2. If you're using React/Vue/Angular, here's a more structured approach:

  // React example
  const handleOtpSuccess = async (sessionKey) => {
    setLoading(true);

    try {
      // Get record info
      const recordInfo = await getRecordInfo(sessionKey);
      if (!recordInfo.success) {
        throw new Error(recordInfo.error);
      }

      // Create payment
      const payment = await createPaymentOrder({
        amount: 1000,
        redirectUrl: `${window.location.origin}/payment/success`,
        phoneNumber: recordInfo.phoneNumber,
        airtableRecordId: recordInfo.airtableRecordId,
        city: recordInfo.city
      });

      if (payment.success) {
        window.location.href = payment.data.redirectUrl;
      } else {
        throw new Error(payment.error);
      }

    } catch (error) {
      console.error('Payment flow error:', error);
      setError('Payment setup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Helper functions
  const getRecordInfo = async (sessionKey) => {
    const response = await fetch('/api/business/get-record-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionKey })
    });
    return response.json();
  };

  const createPaymentOrder = async (orderData) => {
    const response = await fetch('/api/payments/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    return response.json();
  };

  🔧 Implementation Steps:

  1. Find your OTP verification success handler in your frontend code
  2. Replace the current payment flow with the code above
  3. Test the complete flow: Form → OTP → Payment → Success
  4. Check browser console for any errors and the logs I added

  📝 Key Changes Summary:

  - Before: Frontend directly called /create-order without record info
  - After: Frontend first gets record info, then creates payment with proper mapping

  This ensures the payment webhook can find and update the correct Airtable record! 🎯