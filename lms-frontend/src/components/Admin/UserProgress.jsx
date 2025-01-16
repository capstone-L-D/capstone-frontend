import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminHeaderSidebar from './AdminHeaderSidebar';

function UserProgress() {
  const { userId } = useParams();
  const [userCourses, setUserCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");
  const [courseScores, setCourseScores] = useState({});
  const [assessmentStatus, setAssessmentStatus] = useState({});

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await fetch(`http://localhost:8333/api/user-courses/courses/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user progress');
        }

        const data = await response.json();
        setUserCourses(data);

        // Fetch scores for each course
        const scores = {};
        const status = {};
        for (const course of data) {
          try {
            const scoreResponse = await fetch(`http://localhost:7082/user-course-assessments/${course.userCourseId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            if (scoreResponse.ok) {
              const scoreData = await scoreResponse.json();
              // Convert score to percentage (assuming total score is 10)
              const scorePercentage = (scoreData.score / 10) * 100;
              scores[course.userCourseId] = scorePercentage;
              status[course.userCourseId] = {
                taken: true,
                passed: scorePercentage >= 60 // 60% is passing (6 out of 10)
              };
            } else {
              status[course.userCourseId] = {
                taken: false,
                passed: null
              };
            }
          } catch (scoreErr) {
            console.error(`Failed to fetch score for course ${course.userCourseId}:`, scoreErr);
            status[course.userCourseId] = {
              taken: false,
              passed: null
            };
          }
        }
        setCourseScores(scores);
        setAssessmentStatus(status);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [userId, token]);

  if (loading) {
    return (
      <AdminHeaderSidebar>
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </AdminHeaderSidebar>
    );
  }

  if (error) {
    return (
      <AdminHeaderSidebar>
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-red-600">Error: {error}</div>
        </div>
      </AdminHeaderSidebar>
    );
  }

  return (
    <AdminHeaderSidebar>
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Course Progress</h2>
        
        {userCourses.length === 0 ? (
          <p className="text-lg text-gray-600">No courses enrolled yet.</p>
        ) : (
          <div className="grid gap-6">
            {userCourses.map((course) => (
              <div key={course.courseId} className="bg-gray-50 rounded-lg p-6 shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{course.courseName}</h3>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Progress: {course.progress}%
                    </span>
                    {assessmentStatus[course.userCourseId]?.taken ? (
                      <div className="flex gap-2">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800  rounded-full text-sm font-medium">
                          Assessment Score: {courseScores[course.userCourseId].toFixed(1)}%
                        </span>
                        <span className={`px-4 py-2 ${assessmentStatus[course.userCourseId].passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded-full text-sm font-medium`}>
                          {assessmentStatus[course.userCourseId].passed ? 'Pass' : 'Fail'}
                        </span>
                      </div>
                    ) : (
                      <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        Assessment Not Taken Yet
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p>Enrolled Course: {course.courseTitle}</p>
                  </div>
                  <div>
                    <p>Enrollment Date: {new Date(course.enrollmentDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminHeaderSidebar>
  );
}

export default UserProgress;
