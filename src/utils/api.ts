import type { VacancyForm } from '../components/forms/types';

const API_BASE_URL = 'https://api.thestaffcompany.com';

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const submitVacancy = async (data: VacancyForm): Promise<ApiResponse> => {
  try {
    // Mock implementation - replace with actual API call
    console.log('Submitting vacancy data:', data);
    
    const response = await fetch(`${API_BASE_URL}/job-requirements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Submission failed');
    }
    
    const result = await response.json();
    return {
      success: true,
      message: 'Job requirement submitted successfully!',
      data: result,
    };
  } catch (error) {
    console.error('API submission error:', error);
    
    // For development/testing - simulate API responses
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate random success/failure for testing
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          resolve({
            success: true,
            message: 'Job requirement submitted successfully!',
            data: { id: Math.random().toString(36).substr(2, 9) },
          });
        } else {
          resolve({
            success: false,
            message: 'Failed to submit. Please try again.',
          });
        }
      }, 1500); // Simulate network delay
    });
  }
}; 