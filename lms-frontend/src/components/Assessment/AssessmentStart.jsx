import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Timer as TimerIcon, Book, Award, AlertCircle } from 'lucide-react';
import Assessment from './Assessment';

// Using the same sample assessment data structure
// const assessment = {
//   _id: "assessment_101",
//   title: "Java Basics",
//   totalScore: 100,
//   passScore: 60,
//   timeLimit: 30,
//   description: "This assessment tests your knowledge of basic Java programming concepts.",
//   instructions: [
//     "Read each question carefully before answering",
//     "You cannot go back to previous questions once answered", 
//     "The assessment will auto-submit when the time limit is reached",
//     "Ensure you have a stable internet connection"
//   ],
  // questions: [
    
  //     {
  //       questionId: "question_201",
  //       text: "What is Java?",
  //       type: "Multiple Choice",
  //       points: 10,
  //       options: [
  //         { optionId: "option_301", text: "Programming Language", isCorrect: true },
  //         { optionId: "option_302", text: "Database", isCorrect: false }
  //       ]
  //     }
  // ]
// };

function AssessmentStart() {
  
  const [assessment, setAssessment] = useState({
    title: '',
    description: '',
    timeLimit: 0,
    totalScore: 0,
    passScore: 0,
    instructions: []
  });
  const [userCourseAssessment, setUserCourseAssessment] = useState({});

  const [showAssessment, setShowAssessment] = React.useState(false);
  const [error, setError] = useState(null);
  const { cId, UCID } = useParams();
  const token = localStorage.getItem("authToken");
  const url = `http://localhost:7080/assessments/course/${cId}`;
  const apiUrl = `http://localhost:7082/user-course-assessments/start`;

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
        setAssessment(assessmentData);
      } catch (parseError) {
        console.error('Failed to parse response:', responseText);
        throw new Error(`Failed to parse JSON response: ${parseError.message}`);
      }

      fetch(`${apiUrl}?userCourseId=${UCID}&assessmentId=${cId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Optional, if backend expects JSON
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
         
        })
        .then((data) => {
        
          console.log("Assessment started:", data);
          // Handle the response data (e.g., save it to state, display it to the user)
        })
        setUserCourseAssessment(data);

    } catch (error) {
      setError(error.message);
      console.error("Error loading assessment:", error);
    }
  };
  
  useEffect(() => {
    loadAssessment();
  }, []);

  const handleStartAssessment = () => {
    setShowAssessment(true);
  };

  if (showAssessment) {
    return <Assessment assessment={assessment} userCourseAssessment={userCourseAssessment} />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error Loading Assessment</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{assessment.title}</h1>
          
          <p className="text-gray-600 mb-8">{assessment.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <TimerIcon className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Time Limit</p>
                <p className="font-semibold">{assessment.timeLimit} minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total Score</p>
                <p className="font-semibold">{assessment.totalScore} points</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
              <Book className="w-6 h-6 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Pass Score</p>
                <p className="font-semibold">{assessment.passScore} points</p>
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
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleStartAssessment}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssessmentStart;
