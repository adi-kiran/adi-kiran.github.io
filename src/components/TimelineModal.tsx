// src/components/TimelineModal.tsx
import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  jobFunctions: string[];
  skillsGained: string[];
  characterImage: string;
}

interface TimelineModalProps {
  event: TimelineEvent;
  onClose: () => void;
}

const TimelineModal: React.FC<TimelineModalProps> = ({ event, onClose }) => {
  // This function prevents click events on the modal content from bubbling up to the overlay.
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 cursor-auto"
      onClick={onClose} // Clicking anywhere on the overlay will close the modal.
    >
      <motion.div
        className="bg-gray-900 rounded-lg p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={handleContentClick} // Prevent modal content clicks from closing the modal.
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl leading-none"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center items-center p-4">
            <img
              src={event.characterImage}
              alt="Star Wars Character"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              {event.title}
            </h3>
            {event.subtitle && (
              <h4 className="text-xl text-gray-300 mb-2">
                {event.subtitle}
              </h4>
            )}
            <span className="text-sm text-gray-500">{event.date}</span>
            <p className="mt-2 text-gray-200">{event.description}</p>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-200">
                {event.jobFunctions.map((fn, index) => (
                  <li key={index}>{fn}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-white">
                Skills Mastered:
              </h5>
              <p className="text-gray-200">{event.skillsGained.join(", ")}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineModal;
