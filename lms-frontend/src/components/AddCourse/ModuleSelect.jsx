import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ModuleSelect = ({ selectedModules, onChange, modules }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleModule = (moduleId) => {
    const newSelection = selectedModules.includes(moduleId)
      ? selectedModules.filter((m) => m !== moduleId)
      : [...selectedModules, moduleId];
    onChange(newSelection);
  };

  const filteredModules = modules.filter(module =>
    module.moduleTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.module-select-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative module-select-container">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search modules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setIsOpen(true)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredModules.map((module) => (
            <div
              key={module}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleModule(module)}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="mr-3"
                checked={selectedModules.includes(module.moduleId)}
                onChange={(e) => {
                  e.stopPropagation();
                  toggleModule(module.moduleId);
                }}
              />
              <span className="text-gray-900">{module.moduleTitle}</span>
            </div>
          ))}
          {filteredModules.length === 0 && (
            <div className="px-4 py-2 text-gray-500 text-center">
              No modules found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModuleSelect;
