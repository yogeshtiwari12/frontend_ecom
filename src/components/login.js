import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './authcontext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUsername} = useAuth()
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/allroutes/login", {
        email,
        password
      });
   
      

      if (response.data.token) {
        alert("Login Successful");
        localStorage.setItem("token", response.data.token);
        setUsername(response.data.name);
        window.location.reload();
        console.log("token get")
  
      }
       else {
        throw new Error("Login failed. Please try again.");
        // console.log(response.data.error);
      }
    } catch (error) {
      console.log(error.response?.data?.message || error.message || "An error occurred")
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-4 outline-none"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-1 rounded hover:bg-red-400 transition-colors"
          >
            Login
          </button>
          
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
