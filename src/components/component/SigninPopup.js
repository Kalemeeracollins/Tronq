// components/SigninPopup.js
import React from 'react';

const SigninPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Sign-in form goes here */}
        <button onClick={onClose} className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default SigninPopup;
