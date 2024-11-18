import React, { useState } from 'react';
import { Timer } from './Timer';
import { Question } from './Question';
import { CheckCircle } from 'lucide-react';

function Assessment({ assessment, userCourseAssessment }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("authToken");

  const handleSelectOption = (answer) => {
    setSelectedAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== answer.questionId);
      return [...filtered, answer];
    });
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    setIsTimerActive(false);
    console.log(selectedAnswers);
    console.log(userCourseAssessment);
    try {
      // Await the fetch request to complete and get the response
      const response = await fetch("http://localhost:7081/user-answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userCourseAssessmentId : userCourseAssessment.userCourseAssessmentId,
          selectedOptions : selectedAnswers,
        }),
      });
    }catch (err) {
      if (err.response) {
        setError(
          `Login failed: ${
            err.response.data.message || err.response.statusText
          }`
        );
      } else if (err.request) {
        setError("No response received from the server. Please try again.");
      } else {
        setError(`Error: ${err.message}`);
      }
    }


    console.log('Selected Answers:', selectedAnswers.map(answer => answer.selectedOption));
  };

  const handleTimeUp = () => {
    handleSubmit();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{assessment.title}</h1>
          {isTimerActive && (
            <Timer timeLimit={assessment.timeLimit} onTimeUp={handleTimeUp} />
          )}
        </div>

        <div className="space-y-6">
          {assessment.questions.map((question) => (
            <Question
              key={question.questionId}
              question={question}
              selectedAnswer={selectedAnswers.find(
                (a) => a.questionId === question.questionId
              )}
              onSelectOption={handleSelectOption}
            />
          ))}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit Assessment
          </button>
        ) : (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 text-green-700 mb-4">
              <CheckCircle className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Assessment Submitted</h2>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Assessment;
