import React from 'react';

export function Question({ question, selectedAnswer, onSelectOption }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {question.text}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option.optionId}
            className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors hover:bg-gray-50"
            style={{
              borderColor:
                selectedAnswer?.selectedOption.optionId === option.optionId
                  ? '#3B82F6'
                  : '#E5E7EB',
            }}
          >
            <input
              type="radio"
              name={question.questionId}
              value={option.optionId}
              checked={selectedAnswer?.selectedOption.optionId === option.optionId}
              onChange={() =>
                onSelectOption({
                  questionId: question.questionId,
                  selectedOption: option,
                })
              }
              className="w-4 h-4 text-blue-500"
            />
            <span className="ml-3 text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
