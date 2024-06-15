import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setShowConfirmPassword(value.length > 0);
  };

  const handleSubmit = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Navigate to the home page
      navigate('/Home');
    }
  };

  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 card p-5 bg-[#dbeafe]">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-black">Sign In</h1>
          <p className="text-sm text-black">Sign in to access your account</p>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label text-black">Email address</label>
            <input
              placeholder="Type here"
              type="email"
              className="input max-w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <label className="form-label">
                <span className="form-label-alt">{emailError}</span>
              </label>
            )}
          </div>
          <div className="form-field">
            <label className="form-label text-black">Password</label>
            <div className="form-control relative">
              <input
                placeholder="Type here"
                type={showPassword ? 'text' : 'password'}
                className="input max-w-full"
                value={password}
                onChange={handlePasswordChange}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          {showConfirmPassword && (
            <div className="form-field">
              <label className="form-label text-black">Confirm Password</label>
              <div className="form-control relative">
                <input
                  placeholder="Type here"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="input max-w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
          )}
          {passwordError && (
            <label className="form-label">
              <span className="form-label-alt">{passwordError}</span>
            </label>
          )}
          <div className="form-field text-black">
            <div className="form-control justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="checkbox" />
                <a href="#">Remember me</a>
              </div>
              <label className="form-label">
                <a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
              </label>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="button" className="btn btn-primary w-full" onClick={handleSubmit}>Sign in</button>
            </div>
          </div>
          <div className="form-field">
            <div className="form-control justify-center">
              <Link  to="/Login" className="link link-underline-hover link-primary text-sm">Already have an account ? Log in.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
