import React from 'react';
import { Modal } from '@mui/material';
import UserForm from './UserForm';

interface ModalTypes {
  open: boolean;
  onClose: () => void,
}
export default function BasicModal(props: ModalTypes) {
  const { open, onClose } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <UserForm />
      </Modal>
    </div>
  );
}
