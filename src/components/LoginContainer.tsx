import React from "react";
import { Logo } from "../assets";
import Login from "./Login";

const LoginContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white main-login-container">
        <div className="mx-auto mb-4 text-center">
          <img src={Logo} alt="atlys_logo" style={{ margin: "0 auto" }} />
        </div>
      <Login />
    </div>
  );
};

export default LoginContainer;
