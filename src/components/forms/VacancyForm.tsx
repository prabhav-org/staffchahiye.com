import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { vacancyFormSchema } from '../../utils/validation';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import {
  vacancyTypes,
  candidateTypes,
  genderOptions,
  experienceOptions,
  minimumQualificationOptions,
  workingHoursOptions,
  otherBenefitsOptions
} from '../../constants/jobOptions';
import type { VacancyForm as VacancyFormData, VacancyFormProps } from './types';

export const VacancyForm: React.FC<VacancyFormProps> = ({
  initialPhone,
  onSubmit,
  onClose
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VacancyFormData>({
    resolver: zodResolver(vacancyFormSchema),
    defaultValues: {
      phoneNumber: initialPhone || '',
      candidateType: 'Any',
      gender: 'Any',
      minimumQualification: 'Any',
      otherBenefits: 'None',
      remarks: '',
      // Set default for salary to avoid NaN issues if not provided in defaults
      minSalary: 0,
      maxSalary: 0,
    },
  });

  const candidateType = watch('candidateType');
  const minSalary = watch('minSalary');

  // Set initial phone number if provided
  useEffect(() => {
    if (initialPhone) {
      setValue('phoneNumber', initialPhone);
    }
  }, [initialPhone, setValue]);

  const onFormSubmit = async (data: VacancyFormData) => {
    const success = await onSubmit(data);
    if (success !== undefined) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Tell us your hiring requirements
        </h2>
        <p className="text-sm text-gray-600">
          Fill in the details below and we'll connect you with the right candidates
        </p>
      </div>

      <Input
        label="Business Name"
        required
        {...register('businessName')}
        error={errors.businessName?.message}
        placeholder="Enter your business name"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Person of Contact"
          required
          {...register('yourName')}
          error={errors.yourName?.message}
          placeholder="Enter your full name"
        />

        <Input
          label="Phone Number"
          type="tel"
          required
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
          placeholder="Enter 10 digit mobile number"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Requirement"
          required
          options={vacancyTypes}
          {...register('requirement')}
          error={errors.requirement?.message}
          placeholder="Select job category"
        />

        <Input
          label="Staff Required"
          type="number"
          required
          {...register('numberOfOpenings', { valueAsNumber: true })}
          error={errors.numberOfOpenings?.message}
          placeholder="Total number of vacancies"
          min="1"
          max="999"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          required
          {...register('city')}
          error={errors.city?.message}
          placeholder="City Name"
        />

        <Input
          label="Locality"
          required
          {...register('locality')}
          error={errors.locality?.message}
          placeholder="Enter Your Locality"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Select
          label="Gender"
          required
          options={genderOptions}
          {...register('gender')}
          error={errors.gender?.message}
        />

        <Select
          label="Candidate Type"
          required
          options={candidateTypes}
          {...register('candidateType')}
          error={errors.candidateType?.message}
        />

        <Select
          label="Qualifications"
          required
          options={minimumQualificationOptions}
          {...register('minimumQualification')}
          error={errors.minimumQualification?.message}
          placeholder="Select qualifications"
        />
      </div>

      {candidateType === 'Experienced only' && (
        <div className="conditional-field">
          <Select
            label="Required Experience"
            required
            options={experienceOptions}
            {...register('requiredExperience')}
            error={errors.requiredExperience?.message}
            placeholder="Select experience level"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Minimum Salary"
            type="number"
            required
            {...register('minSalary', { valueAsNumber: true })}
            error={errors.minSalary?.message}
            placeholder="e.g., 15000"
            min="0"
          />
          <Input
            label="Maximum Salary"
            type="number"
            required
            {...register('maxSalary', { valueAsNumber: true })}
            error={errors.maxSalary?.message}
            placeholder="e.g., 25000"
            min={minSalary || 0}
          />
        </div>
        <Select
          label="Working Hours"
          required
          options={workingHoursOptions}
          {...register('workingHours')}
          error={errors.workingHours?.message}
          placeholder="Select working hours"
        />
      </div>

      <Select
        label="Other Benefits"
        required
        options={otherBenefitsOptions}
        {...register('otherBenefits')}
        error={errors.otherBenefits?.message}
        placeholder="Select other benefits"
      />

      <Input
        label="Remarks"
        {...register('remarks')}
        error={errors.remarks?.message}
        placeholder="Any specific requirements or notes"
      />

      <div className="pt-4 border-t border-gray-200">
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? (
            <div className="submit-btn-loading">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </div>
          ) : (
            'Submit Requirements'
          )}
        </button>
      </div>
    </form>
  );
}; 