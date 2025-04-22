import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">Oops! Page not found</p>
        <p className="text-gray-500 mt-2">The page you’re looking for doesn’t exist or has been moved.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

