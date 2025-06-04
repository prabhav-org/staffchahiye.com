import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { VacancyForm } from './forms/VacancyForm';
import { useVacancySubmission } from '../hooks/useVacancySubmission';
import type { VacancyModalProps } from './forms/types';

export const VacancyModal: React.FC<VacancyModalProps> = ({ 
  isOpen, 
  onClose, 
  initialPhone 
}) => {
  const { handleSubmit } = useVacancySubmission();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-backdrop" />
        <Dialog.Content className="modal-container">
          <Dialog.Close asChild>
            <button 
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </Dialog.Close>
          
          <VacancyForm 
            initialPhone={initialPhone}
            onSubmit={handleSubmit}
            onClose={onClose}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}; 