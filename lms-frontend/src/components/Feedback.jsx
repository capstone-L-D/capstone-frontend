




import { useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const {UCID}=useParams();
  const token = localStorage.getItem("authToken");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Await the fetch request to complete and get the response
      const response = await fetch("http://localhost:8333/feedback/createFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userCourseId:UCID,
          rating: rating,

          comments: comment,
        }),
      });
    console.log({ rating, comment });
    setSubmitted(true);
    setRating(0);
    setComment('');
  } catch (err) {
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
  };

  const StarRating = ({ selected, hovered }) => (
    <FiStar
      className={`w-8 h-8 ${
        selected
          ? 'fill-yellow-400 stroke-yellow-400'
          : hovered
          ? 'fill-yellow-200 stroke-yellow-400'
          : 'stroke-gray-400'
      } transition-colors duration-150`}
    />
  );

  if (submitted) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50', marginBottom: '10px' }}>
            Thank You!
          </h2>
          <p style={{ color: '#757575' }}>Your feedback has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
        background: 'linear-gradient(to bottom, #a2c2e1, #4a90e2)',
        // Light blue gradient
      minHeight: '100vh', // Full viewport height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '32px' }}>Course Feedback</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{ fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '12px' }}>
              How would you rate this course?
            </label>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  style={{ background: 'none', border: 'none', outline: 'none' }}
                >
                  <StarRating selected={star <= rating} hovered={star <= hoveredRating} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="comment"
              style={{ fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '12px' }}
            >
              Share your thoughts about the course
            </label>
            <textarea
              id="comment"
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontSize: '16px',
                color: '#333',
                resize: 'none',
                outline: 'none',
              }}
              placeholder="What did you like? What could be improved?"
            />
          </div>

          <button
            type="submit"
            disabled={!rating}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '500',
              color: '#fff',
              backgroundColor: rating ? '#1d4ed8' : '#d1d5db',
              cursor: rating ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.3s ease',
              outline: 'none',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = rating ? '#1d4ed8' : '#d1d5db'}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;





