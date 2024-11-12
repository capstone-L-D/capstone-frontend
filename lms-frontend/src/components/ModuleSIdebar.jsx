import { useState } from 'react';
import { FiChevronDown, FiChevronRight, FiPlay, FiFile } from 'react-icons/fi';

function ModuleSidebar({ modules }) {
  const [expandedModules, setExpandedModules] = useState(new Set());

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Course Content</h2>
      </div>
      <div className="p-2">
        {modules.map((module) => (
          <div key={module.id} className="mb-2">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">{module.title}</span>
              {expandedModules.has(module.id) ? (
                <FiChevronDown className="text-gray-500" />
              ) : (
                <FiChevronRight className="text-gray-500" />
              )}
            </button>
            {expandedModules.has(module.id) && (
              <div className="ml-4 mt-1 space-y-1">
                {module.contents.map((content) => (
                  <button
                    key={content.id}
                    onClick={() => content.onSelect(content)}
                    className="w-full flex items-center p-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  >
                    {content.type === 'video' ? (
                      <FiPlay className="mr-2 w-4 h-4" />
                    ) : (
                      <FiFile className="mr-2 w-4 h-4" />
                    )}
                    <span>{content.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleSidebar;