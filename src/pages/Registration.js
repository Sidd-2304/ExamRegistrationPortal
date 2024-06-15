import React, { useState } from 'react';

function Registration() {
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handlePaymentClick = () => {
    // Show the payment completion message
    setIsPaymentCompleted(true);
  };

  return (
    <div className='flex justify-center bg-[#e0f2fe]'>
      <div className='card max-w-lg bg-[#334155] p-8 rounded-md'>
        <div className="w-[80%] mx-auto">
          <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-white">Registration</h1>
              <p className="text-sm text-[#172554]">Please fill out the following details to register</p>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="firstName" className="form-label text-[#172554]">First Name</label>
                <input id="firstName" placeholder="Enter first name" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="lastName" className="form-label text-[#172554]">Last Name</label>
                <input id="lastName" placeholder="Enter last name" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="fatherName" className="form-label text-[#172554]">Father's Name</label>
                <input id="fatherName" placeholder="Enter father's name" type="text" className="input max-w-full bg-[#e0f2fe] text-black" />
              </div>
              <div className="form-field">
                <label htmlFor="motherName" className="form-label text-[#172554]">Mother's Name</label>
                <input id="motherName" placeholder="Enter mother's name" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="dateOfBirth" className="form-label text-[#172554]">Date of Birth</label>
                <input id="dateOfBirth" type="date" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="gender" className="form-label text-[#172554]">Gender</label>
                <select id="gender" className="input max-w-full bg-[#e0f2fe]">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="caste" className="form-label text-[#172554]">Caste</label>
                <select id="caste" className="input max-w-full bg-[#e0f2fe]">
                  <option value="">Select Caste</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="other">Others</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="aadharNumber" className="form-label text-[#172554]">Aadhar Number</label>
                <input id="aadharNumber" placeholder="Enter Aadhar number" type="text" className="input max-w-full bg-[#e0f2fe]" maxLength={12} />
              </div>
              <div className="form-field">
                <label htmlFor="address" className="form-label text-[#172554]">Address</label>
                <input id="address" placeholder="Enter address" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="city" className="form-label text-[#172554]">City</label>
                <input id="city" placeholder="Enter city" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="state" className="form-label text-[#172554]">State</label>
                <input id="state" placeholder="Enter state" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="country" className="form-label text-[#172554]">Country</label>
                <input id="country" placeholder="Enter country" type="text" className="input max-w-full bg-[#e0f2fe]" />
              </div>
              <div className="form-field">
                <label htmlFor="pincode" className="form-label text-[#172554]">Pincode</label>
                <input id="pincode" placeholder="Enter pincode" type="text" className="input max-w-full bg-[#e0f2fe]" maxLength={6} />
              </div>
              <div className="form-field">
                <label htmlFor="photo" className="form-label text-[#172554]">Photo</label>
                <input id="photo" type="file" className="input max-w-full bg-[#e0f2fe]" accept="image/*" />
              </div>
              <div className="form-field">
                <label htmlFor="signature" className="form-label text-[#172554]">Signature</label>
                <input id="signature" type="file" className="input max-w-full bg-[#e0f2fe]" accept="image/*" />
              </div>
              <div className="form-field">
                <button type="button" className="btn btn-primary w-full" onClick={handlePaymentClick}>Proceed to Payment</button>
              </div>
            </div>
            {isPaymentCompleted && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Payment procedure is completed successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
