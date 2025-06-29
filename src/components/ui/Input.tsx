import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  error, 
  required, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="form-field">
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={ref}
        className={`form-input ${error ? 'error' : ''} ${className}`}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}); 