import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  const cards = [
    { title: 'JEE MAIN', content: 'Conducted by NTA India all over India', buttonText: 'Apply' },
    { title: 'NEET', content: 'National Eligibility cum Entrance Test', buttonText: 'Apply' },
    { title: 'GATE', content: 'Graduate Aptitude Test in Engineering', buttonText: 'Apply' },
    { title: 'CAT', content: 'Common Admission Test for IIMs', buttonText: 'Apply' },
    { title: 'UPSC', content: 'Union Public Service Commission Exams', buttonText: 'Apply' },
    { title: 'SSC', content: 'Staff Selection Commission Exams', buttonText: 'Apply' }
  ];

  const handleApply = () => {
    // Redirect to the registration page
    navigate('/Registration');
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {cards.map((card, index) => (
          <div key={index} className="card w-1/3 p-2 m-2">
            <div className="card-body">
              <h2 className="card-header">{card.title}</h2>
              <p className="text-content2">{card.content}</p>
              <div className="card-footer">
                <div className="popover">
                  <label className="popover-trigger my-2 btn btn-solid-primary" tabIndex="0">About the exam</label>
                  <div className="popover-content" tabIndex="0">
                    <div className="popover-arrow"></div>
                    <div className="p-4 text-sm">And here's some amazing content. It's very engaging. Right?</div>
                  </div>
                  {/* Add onClick event handler to call handleApply */}
                  <button className="btn btn-primary" onClick={handleApply}>{card.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
