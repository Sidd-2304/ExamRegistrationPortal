import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative flex w-full h-screen justify-center items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-slide" style={{ backgroundImage: "url('https://imgs.search.brave.com/YrCiWckHyhbmuBU7B9SK2qoq75mKhxvQw_1YOOn6OPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI0/MDY5NTYzL3Bob3Rv/L29wdGljYWwtZm9y/bS1vZi1hbi1leGFt/aW5hdGlvbi13aXRo/LXBlbmNpbC53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1UNzE0b1ltUGoz/RzZ6bERESzUtQk5N/Z3Q1QTRtRzJza1Bk/U1drVHpNWDI4PQ')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-slide" style={{ animationDelay: "4s", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6cWpxAO4Dn2VMZ0kQ6mZE8u-4yptMAAxmw&s')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-slide" style={{ animationDelay: "8s", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tbA4dsDi6Jc4YJAC9Ylgm8AqRSuBYs0hrQ&s')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-slide" style={{ animationDelay: "12s", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4mXpVmibp3TeTB654idkRT998HVoTK4NVQ&s')" }}></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-0 animate-slide" style={{ animationDelay: "16s", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDXE6R3xPa8Fr0-_cynImyigfSS8DKfN2yA&s')" }}></div>
      </div>
      <div className="relative z-10 flex w-full justify-center items-center">
        <div className="w-3/4 flex justify-center items-center">
          <div className="card max-w-full text-center text-3xl text-white">Exam Registration Portal</div>
        </div>
        <div className="divider divider-vertical mx-0 h-full"></div>
        <div className="w-1/4 flex flex-col items-center justify-center gap-8">
          <button className="btn btn-primary w-32" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-primary w-32" onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
