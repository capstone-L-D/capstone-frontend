import React from 'react';
import { BookOpen, FileCheck, Clock, BarChart2, FolderOpen, Image } from 'lucide-react';
import ModuleSelect from './ModuleSelect';

const AVAILABLE_MODULES = [
  "Introduction to Programming",
  "Data Structures",
  "Algorithms",
  "Web Development Basics",
  "Database Management",
  "System Design",
  "Software Testing",
  "DevOps Fundamentals",
  "Cloud Computing",
  "Machine Learning Basics"
];

const CourseForm = ({ formData, onChange, onModuleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <BookOpen className="h-4 w-4 mr-2" />
            Course ID
          </label>
          <input
            type="text"
            name="courseId"
            value={formData.courseId}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Other form fields here */}

        <div className="md:col-span-2">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <BookOpen className="h-4 w-4 mr-2" />
            Select Modules
          </label>
          <ModuleSelect
            selectedModules={formData.selectedModules}
            onChange={onModuleChange}
            modules={AVAILABLE_MODULES}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Course
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
