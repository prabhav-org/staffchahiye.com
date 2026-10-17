import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Users, ArrowUpRight } from '@phosphor-icons/react';
import type { VacancyModalProps } from './forms/types';

import { STAFFING_FORM_URL } from '../constants/links';

export const VacancyModal: React.FC<VacancyModalProps> = ({ isOpen, onClose }) => (
  <Dialog.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="modal-backdrop" />
      <Dialog.Content className="staff-dialog">
        <Dialog.Close asChild>
          <button className="modal-close-btn" aria-label="Close dialog">
            <X size={20} />
          </button>
        </Dialog.Close>
        <div className="staff-dialog-icon"><Users size={28} aria-hidden="true" /></div>
        <span className="staff-dialog-eyebrow">YOUR NEXT HIRE STARTS HERE</span>
        <Dialog.Title className="staff-dialog-title">
          Find the right staff for your business
        </Dialog.Title>
        <Dialog.Description className="staff-dialog-description">
          Share the role, location and experience you need. Our team will get in touch to help you hire.
        </Dialog.Description>
        <a
          href={STAFFING_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="staff-cta staff-dialog-cta"
        >
          Get Staff <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <p className="staff-dialog-note">Your hiring form opens in a new tab.</p>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
