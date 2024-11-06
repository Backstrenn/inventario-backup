import * as React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 ease-in-out" onClick={onClose} />
      <div className="bg-white rounded-3xl shadow-xl z-10 p-8 max-w-2xl mx-auto transform transition-all duration-500 ease-in-out scale-100 relative">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-150 text-2xl font-bold" onClick={onClose}>
          ✖
        </button>
        <div className="modal-content p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
