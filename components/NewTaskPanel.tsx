import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewTaskPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: any) => void;
}

const NewTaskPanel: React.FC<NewTaskPanelProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg overflow-y-auto"
    >
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-bold bg-transparent outline-none"
        />
        
        <div className="space-y-4 mt-6">
          <PropertyItem icon="☀️" label="Status" value="Not selected" />
          <PropertyItem icon="◇" label="Priority" value="Not selected" />
          <PropertyItem icon="📅" label="Deadline" value="Not selected" />
          <PropertyItem icon="✏️" label="Description" value="Not selected" />
          
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add custom property
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100">
        <p className="text-gray-500 text-sm">Start writing, or drag your own files here.</p>
      </div>
    </motion.div>
  );
};

const PropertyItem: React.FC<{ icon: string; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center">
    <span className="mr-2">{icon}</span>
    <span className="text-gray-700 mr-2">{label}</span>
    <span className="text-gray-400">{value}</span>
  </div>
);

export default NewTaskPanel;