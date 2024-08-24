import React, { useEffect } from "react";
import { CloseIcon } from "./GetSvg";
import "../css/customModal.css";

interface ModalProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Customize the modal size
  dismissButtonText?: string; // Custom clear button text
  submitButtonText?: string; // Custom submit button text
  resetButtonText?: string; // Custom reset button text
  onDismiss: () => void; // Callback when clear button is clicked
  onSubmit?: () => void; // Callback when submit button is clicked
  onReset?: () => void; // Callback when reset button is clicked
  isBackDrop?: boolean | null | undefined;
  isKeyboardEvent?: boolean | null | undefined;
  children: React.ReactNode;
  modalTitle: string;
  hideTopCross?: boolean;
  isSubmitButtonDisabled?: () => boolean;
  isResetButtonDisabled?: () => boolean;
  isExtraButtonDisabled?: () => boolean;
}

const CustomModal: React.FC<ModalProps> = ({
  size = "lg",
  dismissButtonText,
  submitButtonText,
  resetButtonText,
  onDismiss,
  onSubmit,
  onReset,
  isBackDrop = true,
  isKeyboardEvent = true,
  children,
  modalTitle,
  hideTopCross,
  isSubmitButtonDisabled = () =>false,
  isResetButtonDisabled = () =>false,
  isExtraButtonDisabled = () =>false
}) => {

  const onModalClose = () => {
    onDismiss && onDismiss();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isKeyboardEvent && event.key === 'Escape') {
        onModalClose();
      }
    };

    if (isKeyboardEvent) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isKeyboardEvent]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center block"
      style={{ backgroundColor: isBackDrop ? 'rgba(0, 0, 0, 0.4)' : 'transparent' }}
      onClick={isBackDrop ? undefined : onDismiss}
    >
      <div
        className={`relative bg-white rounded-sm rounded-md shadow-lg custom-modal ${`custom-modal-${size}`}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4">
          <h5 className="text-lg dodger-blue-color font-semibold">{modalTitle}</h5>
          {!hideTopCross && (
            <span aria-label="Close" onClick={onDismiss} className="cursor-pointer">
              <CloseIcon />
            </span>
          )}
        </div>
        <div className="p-2 custom-modal-body">
          {children}
        </div>
        <div className="flex justify-end p-4 border-t space-x-2 custom-modal-footer">
          {onDismiss && (
            <button type="button" className="btn bg-silver text-white px-1 rounded" onClick={onDismiss}>
              {dismissButtonText}
            </button>
          )}
          {onReset && (
            <button type="button" className="btn text-white px-1 rounded" onClick={onReset} disabled={isResetButtonDisabled ? isResetButtonDisabled() : false}>
              {resetButtonText}
            </button>
          )}
          {onSubmit && (
            <button type="button" className={`${"btn bg-dodger-blue text-white px-1 rounded"} ${isSubmitButtonDisabled() && "!bg-gray-200 !border-gray-200 !opacity-65 "}`} onClick={onSubmit} disabled={isSubmitButtonDisabled ? isSubmitButtonDisabled() : false}>
              {submitButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
