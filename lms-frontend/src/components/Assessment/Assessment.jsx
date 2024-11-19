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
    
    console.log("Selected answers:", selectedAnswers);
    console.log("User course assessment:", userCourseAssessment);
    try {
      const transformedSelectedOptions = selectedAnswers.map(answer => ({
        optionId: answer.selectedOption.optionId,
        text: answer.selectedOption.text, 
        isCorrect: answer.selectedOption.isCorrect, 
      }));
      
      console.log(" answers:", transformedSelectedOptions);
  
      console.log("Transformed options:", transformedSelectedOptions);
  
      const response = await fetch("http://localhost:7082/user-course-assessments/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userCourseAssessmentId: userCourseAssessment.id,
          selectedOptions: transformedSelectedOptions,
        }),
      });
  
      // Check content type before parsing JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Submission successful:", data);
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response format: ${text}`);
      }
    } catch (err) {
      console.error("Error submitting answers:", err);
      setError(err.message);
    }
  };

  const handleTimeUp = () => {
    handleSubmit();
  };

  const handleGoBack = () => {
    window.history.back();
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
            <button
              onClick={handleGoBack}
              className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Assessment;
