import React from 'react';
import Logo from "../images/logo.png";
import Bg from "../images/bg.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSignIn = (userType) => {
    dispatch({ type: 'SET_USER', payload: userType });
  };

  return (
    <div
      className="pb-10 z-10 p-10 overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <img src={Logo} className="w-[300px] flex items-start justify-start" alt="Logo" />
      <div className="flex items-center justify-center flex-col">
        <div className="bg-[#0A0B0C] md:10 p-5 flex flex-col items-center justify-center rounded-md text-white gap-5 lg:w-[30%]">
          <h1 className="font-bold text-[30px]">Sign In As</h1>
          <button className="w-[250px] bg-[#686666] p-2 rounded-sm" onClick={() => handleSignIn('Photographer')}>
            <Link to="/photogLogin">Photographer</Link>
          </button>
          <h2 className="">Or</h2>
          <button className="w-[250px] bg-[#686666] p-2 rounded-sm" onClick={() => handleSignIn('Client')}>
            <Link to="/clientLogin">Client</Link>
          </button>
          {/* <button
            className="bg-[#B60418] text-white h-[40px] w-[100px]"
            style={{ minHeight: "50px", lineHeight: "40px", minWidth: "100px" }}
          >
            Next
          </button> */}
          <p>Don't have an account? <Link to={'/signup'}>
          Sign up now
          </Link></p>
        </div>
      </div>
    </div>
  );
}
