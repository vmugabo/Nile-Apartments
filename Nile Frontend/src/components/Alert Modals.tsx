import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  message,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  if (!show) return null; // If `show` is false, don't render the modal

  return (
    <div className="modal" style={styles.modalBackdrop}>
      <div className="modal-dialog" style={styles.modalDialog}>
        <div className="modal-content" style={styles.modalContent}>
          <div className="modal-header" style={styles.modalHeader}>
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close" style={styles.closeButton}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              {cancelText}
            </button>
            {onConfirm && (
              <button type="button" className="btn btn-primary" onClick={onConfirm}>
                {confirmText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1050, // Ensure it's above other content
  },
  modalDialog: {
    maxWidth: '500px',
    width: '100%',
  },
  modalContent: {
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  modalHeader: {
    backgroundColor: '#0071c2',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  closeButton: {
    color: 'white',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
};

export default Modal;
