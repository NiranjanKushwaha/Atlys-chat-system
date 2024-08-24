import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4">
            <svg width="24" height="24" fill="currentColor" className="text-white mx-auto">
              <path d="M9.707 6.293a1 1 0 00-1.414 0L4 10.586V4a1 1 0 112 0v4.586l4.293-4.293a1 1 0 011.414 1.414L6.414 10H11a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 10-2 0v10a1 1 0 001 1h7a1 1 0 110 2H4a1 1 0 01-1-1v6a1 1 0 102 0v-4.586l4.293 4.293a1 1 0 001.414-1.414L5.414 16H11a1 1 0 110 2H4a1 1 0 01-1-1v-6.414l4.293 4.293a1 1 0 001.414-1.414L6.414 10H11a1 1 0 010 2H4a1 1 0 01-1-1V10a1 1 0 112 0v4.586l4.293-4.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold">WELCOME BACK</h2>
          <p className="text-gray-400">Log into your account</p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email or Username</label>
            <input 
              type="text" 
              className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email or username" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your password" 
              />
              <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
                <svg width="20" height="20" fill="currentColor">
                  <path d="M12 11h-1V9a3 3 0 10-6 0v2H4a1 1 0 000 2h1v1h1v-1h4v1h1v-1h1a1 1 0 100-2zM7 9a1 1 0 012 0v2H7V9z"/>
                </svg>
              </span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-400 hover:underline">Forgot password?</a>
            </div>
          </div>
          <button 
            type="button" 
            className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white"
            onClick={()=> navigate('/home')}
          >
            Login now
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Not registered yet? <NavLink to="/register" className="text-blue-500 hover:underline">Register</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
