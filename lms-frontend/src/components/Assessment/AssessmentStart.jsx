import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Timer as TimerIcon, Book, Award, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import Assessment from './Assessment';

function AssessmentStart() {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState({
    title: '',
    description: '',
    timeLimit: 0,
    totalScore: 0,
    passScore: 0,
    instructions: []
  });
  const [userCourseAssessment, setUserCourseAssessment] = useState({});
  const [score, setScore] = useState(null);
  const [showAssessment, setShowAssessment] = React.useState(false);
  const [error, setError] = useState(null);
  const { cId, UCID } = useParams();
  const token = localStorage.getItem("authToken");
  const url = `http://localhost:7080/assessments/course/${cId}`;
  const apiUrl = `http://localhost:7082/user-course-assessments/start`;
  const url2= `http://localhost:7082/user-course-assessments/${UCID}`;

  const loadAssessment = async () => {
    try {
      const assessmentResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!assessmentResponse.ok) {
        throw new Error(`HTTP error! status: ${assessmentResponse.status}`);
      }

      const responseText = await assessmentResponse.text();
      if (!responseText) {
        throw new Error('Empty response received from server');
      }
      
      try {
        const assessmentData = JSON.parse(responseText);
        if (!assessmentData || Object.keys(assessmentData).length === 0) {
          setError("No assessment available for this course yet.");
          return;
        }
        setAssessment(assessmentData);
      } catch (parseError) {
        console.error('Failed to parse response:', responseText);
        throw new Error(`Failed to parse JSON response: ${parseError.message}`);
      }
      const resultResponse = await fetch(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (resultResponse.ok) {
        const data = await resultResponse.json();
        setScore(data.score);
      }

    } catch (error) {
      setError(error.message);
      console.error("Error loading assessment:", error);
    }
  };
  
  useEffect(() => {
    loadAssessment();
  }, []);

  const handleStartAssessment = async () => {
    try{
     const userCourseAssessmentResponse = await fetch(`${apiUrl}?userCourseId=${UCID}&assessmentId=${cId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Added auth token to prevent multiple calls
        },
        cache: 'no-store' // Prevent caching to ensure single call
      });

      if (!userCourseAssessmentResponse.ok) {
        throw new Error(`HTTP error! status: ${userCourseAssessmentResponse.status}`);
      }

      const userCourseAssessmentData = await userCourseAssessmentResponse.json();
      setUserCourseAssessment(userCourseAssessmentData);
      console.log("Assessment started:", userCourseAssessmentData);
      setShowAssessment(true);
    } catch (error) {
      setError(error.message);
      console.error("Error starting assessment:", error);
    }
  };

  if (showAssessment) {
    return <Assessment assessment={assessment} userCourseAssessment={userCourseAssessment} />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-4">No Assessment Available</h2>
          <p className="text-gray-600">{error}</p>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-start mb-4">
            
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{assessment.title}</h1>
          
          <p className="text-gray-600 mb-8">{assessment.description}</p>

          {score !== null && (
            <div className={`mb-8 p-4 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 ${score > 6 ? 'bg-green-50' : 'bg-red-50'}`}>
              <h2 className="text-xl font-semibold mb-2">Previous Attempt</h2>
              <div className="flex items-center gap-2">
                <span className={`text-lg font-medium ${score > 6 ? 'text-green-700' : 'text-red-700'}`}>
                  Score: {score}
                </span>
                {score > 6 ? (
                  <div className="flex items-center animate-bounce">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Congratulations! You Passed! 🎉
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-600 mr-2" />
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Keep trying! You can do better! 💪
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <TimerIcon className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Time Limit</p>
                <p className="font-semibold">{assessment.timeLimit} minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <Award className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total Score</p>
                <p className="font-semibold">{10} points</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <Book className="w-6 h-6 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Pass Score</p>
                <p className="font-semibold">{6} points</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Instructions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {assessment.instructions && assessment.instructions.map((instruction, index) => (
                <li key={index} className="transform transition-all hover:translate-x-2">{instruction}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleStartAssessment}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {score !== null ? 'Re-Test' : 'Start Assessment'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssessmentStart;
