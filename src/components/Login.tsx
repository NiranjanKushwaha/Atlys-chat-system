import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { CloseEyeSvg, EyeSvg } from "../utils/GetSvg";

const Login: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white loginScreen">
      <div className="flex items-center justify-center">
        <div className="post-card text-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="text-center mb-8">
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
                  type={isPasswordVisible ? "text" : "password"}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-2 flex items-center text-gray-400" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? <EyeSvg /> : <CloseEyeSvg />}
                </span>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-gray-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="button"
              className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white"
              onClick={() => navigate("/home")}
            >
              Login now
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Not registered yet?{" "}
            <NavLink to="/register" className="text-blue-500 hover:underline">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
