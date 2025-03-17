import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg p-5 w-1/2 h-1/2">
        <button onClick={onClose} className="relative top-5 right-5">
          Close
        </button>
        <iframe
          src={videoUrl}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default Modal;