import React,{useState} from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';


import {auth, createUserWithEmailAndPassword} from '../../firebase-Config.js'




const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         Swal.fire({
            title: "SignIn Successfully!",
            icon: "success",
            draggable: true
            });
        setEmail("");
        setPassword("");
        navigate("/logIn")
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold font-sans mb-6 text-gray-800">SignIn</h1>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addEmail}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Have an account? <NavLink to="/logIn" className="text-blue-500 cursor-pointer">Log in</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
