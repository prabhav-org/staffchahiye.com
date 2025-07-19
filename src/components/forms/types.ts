export interface VacancyForm {
  businessName: string;        // required, min 2 chars
  yourName: string;           // required, min 2 chars
  phoneNumber: string;        // required, Indian phone validation
  requirement: string;        // required, from predefined list
  numberOfOpenings: number;   // required, min 1, max 999
  city: string;              // required, min 2 chars
  locality: string;          // required, min 2 chars
  gender: 'Male' | 'Female' | 'Any';  // required
  candidateType: 'Fresher works' | 'Experienced only' | 'Any';  // required
  requiredExperience: string; // required when candidateType is 'Experienced only'
  minimumQualification: string; // required
  minSalary: number;         // required
  maxSalary: number;         // required
  workingHours: string;      // required
  otherBenefits: string[];   // required, array of selected benefits
  remarks?: string;          // optional
}

export interface VacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhone?: string;
}

export interface VacancyFormProps {
  initialPhone?: string;
  onSubmit: (data: VacancyForm) => Promise<boolean>;
  onClose: () => void;
  handleSendOtp: (phoneNumber: string) => void;
}