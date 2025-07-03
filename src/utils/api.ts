import { redirect } from 'react-router-dom';
import type { VacancyForm } from '../components/forms/types';

// const API_BASE_URL = '/api/business';
// const API_BASE_URL = 'https://api.airtable.com/v0/app1234567890/tbl1234567890';
const API_BASE_URL = 'http://localhost:4000/api';
const REQUEST_TIMEOUT = 10000; // 10 seconds

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface FormSubmissionResponse extends ApiResponse {
  data?: {
    recordId: string;
    phoneNumber: string;

    sessionId: string;
  };
}

export interface OtpResponse extends ApiResponse {
  data?: {
    messageId?: string;
  };
}

export interface PaymentResponse extends ApiResponse {
  data?: {
    paymentUrl: string;
    paymentId: string;
  };
}

// Helper function to create fetch with timeout
const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Step 1: Submit form and create Airtable record
export const submitVacancy = async (data: VacancyForm): Promise<FormSubmissionResponse> => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/business/submit-form`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
      REQUEST_TIMEOUT
    );
    console.log('Raw API Response:', response);
    const result = await response.json();
    console.log('Parsed Result:', result);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Form submission failed`);
    }
    
    console.log('Result from api:', result);

    return {
      success: true,
      message: 'Form submitted successfully! Please verify your phone number.',
      data: {
        recordId: result.clientId,
        sessionId: result.sessionKey,
        phoneNumber: result.phoneNumber,
      },
    };
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timed out. Please check your connection and try again.',
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
    };
  }
};

// Step 2: Send OTP to phone number
export const sendOtp = async (phoneNumber: string, sessionId: string): Promise<any> => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/business/send-otp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, sessionId }),
      },
      REQUEST_TIMEOUT
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Failed to send OTP`);
    }
    
    const result = await response.json();
   
    return {
      success: true,
      message: 'OTP sent successfully!',
      data: result.data,
    };
  } catch (error) {
    console.error('OTP send error:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timed out. Please check your connection and try again.',
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Failed to send OTP. Please try again.',
    };
  }
};

// Step 3: Verify OTP
export const verifyOtp = async (phoneNumber: string, otp: string, sessionId:string, verificationId:string): Promise<ApiResponse> => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/business/verify-otp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp , sessionId , verificationId }),
      },
      REQUEST_TIMEOUT
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: OTP verification failed`);
    }
    
    const result = await response.json();
    return {
      success: true,
      message: 'Phone number verified successfully!',
      data: result.data,
    };
  } catch (error) {
    console.error('OTP verification error:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timed out. Please check your connection and try again.',
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Invalid OTP. Please try again.',
    };
  }
};

// Step 4: Continue to payment
export const continueToPayment = async (amount:number,phoneNumber:string,redirectUrl:string): Promise<any> => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/payments/create-order`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount , phoneNumber , redirectUrl }),
      },
      REQUEST_TIMEOUT
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Payment initialization failed`);
    }
    
    const result = await response.json();
    return {
      success: true,
      message: 'Payment link generated successfully!',
      data: result,
    };
  } catch (error) {
    console.error('Payment initialization error:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timed out. Please check your connection and try again.',
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Failed to initialize payment. Please try again.',
    };


   
  }


 
}; 
 export const verifyPayment = async (orderId:string):Promise<any> =>{

     try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/payments/verify-order`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({orderId}),
      },
      REQUEST_TIMEOUT
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Payment failed`);
    }
    
    const result = await response.json();
    return {
      success: true,
      message: 'Your Payment is successfull!',
      data: result,
    };
  } catch (error) {
    console.error('Payment verification error:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          success: false,
          message: 'Request timed out. Please check your connection and try again.',
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Failed to complete payment. Please try again.',
    };


   
  }

  }