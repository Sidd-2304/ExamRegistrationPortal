import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    }
    if (validateEmail(email) && password.length >= 6) {
      // Perform login
      console.log('Logging in with', { email, password });
      // Redirect to the home page after successful login
      navigate('/Home');
    }
  };

  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className='flex justify-center mt-10'>
        <div className='card p-5 bg-[#dbeafe]'>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-black">Log In</h1>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label text-black">Email address</label>
                <input
                  placeholder="Type here"
                  type="email"
                  className="input max-w-full"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <label className="form-label">
                  <span className="form-label-alt text-black">{emailError}</span>
                </label>}
              </div>
              <div className="form-field">
                <label className="form-label text-black">Password</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="password"
                    className="input max-w-full"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <label className="form-label">
                    <span className="form-label-alt">{passwordError}</span>
                  </label>}
                </div>
              </div>
              <div className="form-field">
                <div className="form-control justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" className="checkbox" />
                    <a href="# text-black">Remember me</a>
                  </div>
                  <label className="form-label">
                    <a className="link link-underline-hover link-primary text-sm text-black">Forgot your password?</a>
                  </label>
                </div>
              </div>
              <div className="form-field pt-5">
                <div className="form-control justify-between">
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                    onClick={handleSubmit}
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className="form-field">
                <div className="form-control justify-center">
                  <Link to="/Signup" className="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
