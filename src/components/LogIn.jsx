import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth,signInWithEmailAndPassword  } from '../../firebase-Config';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         Swal.fire({
            title: "LogIn Successfully!",
            icon: "success",
            draggable: true
            });
        setEmail('');
        setPassword('');
        navigate("/")
        
      })
      .catch((error) => {
        console.error('Login Error:', error.code, error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold font-sans mb-6 text-gray-800">LogIn</h1>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
        >
          Log In
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Don’t have an account?{' '}
          <NavLink to="/signIn" className="text-blue-500 cursor-pointer">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
