import type { VacancyForm } from '../components/forms/types';
import axios from 'axios';

// const API_BASE_URL = '/api/business';
// const API_BASE_URL = 'https://api.airtable.com/v0/app1234567890/tbl1234567890';
const API_BASE_URL = 'http://localhost:4000/api';

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface PaymentResponse {
  redirectUrl: string;
}

export interface OtpSendResponse {
  sessionId: string;
  status: string;
  message: string;
  data: {
    verificationId: string;
  };
}

export interface OtpVerifyResponse {
  success: boolean;
  message: string;
  data: {
    verificationId: number;
    mobileNumber: string;
    verificationStatus: string;
    responseCode: string;
    errorMessage: string | null;
    transactionId: string;
    authToken: string | null;
  };
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  clientId: string;
  phoneNumber: string;
  sessionKey: string;
}

// Step 1: Submit Vacancy Form
export const submitVacancyForm = async (formData: VacancyForm): Promise<FormSubmissionResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/business/submit-form`, formData);
    return response.data as FormSubmissionResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to submit vacancy form');
    }
    throw new Error('An unexpected error occurred');
  }
};

// Step 2: Send OTP
export const sendOtp = async (phoneNumber: string, sessionId: string): Promise<OtpSendResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/business/send-otp`, { phoneNumber, sessionId });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to send OTP');
    }
    throw new Error('An unexpected error occurred');
  }
};

// Step 3: Verify OTP
export const verifyOtp = async (phoneNumber: string, otp: string, sessionId: string, verificationId: string): Promise<OtpVerifyResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/business/verify-otp`, {
      phoneNumber,
      otp,
      sessionId,
      verificationId,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to verify OTP');
    }
    throw new Error('An unexpected error occurred');
  }
};

// Step 4: Continue to payment
export const continueToPayment = async (recordId: string): Promise<PaymentResponse> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/business/continue-to-payment`,
      { recordId }
    );
    if (response.status !== 200) {
      throw new Error(response.data?.message || `HTTP ${response.status}: Payment initialization failed`);
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Payment initialization error');
    }
    throw new Error('An unexpected error occurred');
  }
}; 