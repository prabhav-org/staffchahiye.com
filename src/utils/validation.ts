import { z } from 'zod';

// Indian phone number validation
export const validateIndianPhone = (phone: string): boolean => {
  const indianPhoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
  return indianPhoneRegex.test(phone.replace(/\s+/g, ''));
};

// Zod schema for form validation
export const vacancyFormSchema = z.object({
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .max(50, 'Business name must be less than 50 characters')
    .regex(/^[a-zA-Z\s.\-'&]+$/, 'Business name can only contain letters, spaces, dots, hyphens, apostrophes and ampersands'),
  
  yourName: z
    .string()
    .min(2, 'Your name must be at least 2 characters')
    .max(30, 'Your name must be less than 30 characters')
    .regex(/^[a-zA-Z\s.\-']+$/, 'Name can only contain letters, spaces, dots, hyphens and apostrophes'),
  
  phoneNumber: z
    .string()
    .refine(validateIndianPhone, 'Please enter a valid Indian phone number'),
  
  requirement: z
    .string()
    .min(1, 'Please select a requirement'),
  
  numberOfOpenings: z
    .number()
    .min(1, 'Number of openings must be at least 1')
    .max(999, 'Number of openings cannot exceed 999')
    .optional()
    .default(1), // Default to 1 if not provided
  
  city: z
    .string()
    .min(2, 'City name must be at least 2 characters')
    .max(30, 'City name must be less than 30 characters'),
  
  locality: z
    .string()
    .min(2, 'Locality must be at least 2 characters')
    .max(50, 'Locality must be less than 50 characters'),
  
  gender: z.enum(['Male', 'Female', 'Any'], {
    errorMap: () => ({ message: 'Please select a gender preference' }),
  }),
  
  candidateType: z.enum(['Fresher Works', 'Experienced Only', 'Any'], {
    errorMap: () => ({ message: 'Please select candidate type' }),
  }),
  
  requiredExperience: z.string().optional(),

  minimumQualification: z.string().min(1, 'Please select minimum qualification'),

  minSalary: z
    .number()
    .min(0, 'Minimum salary cannot be negative')
    .max(9999999, 'Minimum salary is too high'),

  maxSalary: z
    .number()
    .min(0, 'Maximum salary cannot be negative')
    .max(9999999, 'Maximum salary is too high'),
  
  workingHours: z.string().min(1, 'Please select working hours'),

  otherBenefits: z.array(z.string())
    .min(1, 'Please select at least one benefit')
    .max(7, 'You can select up to 7 benefits'),

  remarks: z.string().optional(), // Can be optional
}).refine(
  (data) => {
    if (data.candidateType === 'Experienced Only') {
      return data.requiredExperience && data.requiredExperience.length > 0;
    }
    return true;
  },
  {
    message: 'Required experience is mandatory for experienced candidates',
    path: ['requiredExperience'],
  }
).refine(
  (data) => data.minSalary <= data.maxSalary,
  {
    message: 'Minimum salary cannot be greater than maximum salary',
    path: ['minSalary'],
  }
); 