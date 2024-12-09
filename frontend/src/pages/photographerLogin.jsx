import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { SET_USER } from '../redux/actionTypes';
import Logo from "../images/logo.png";
import Bg from "../images/bg.png";

export default function LoginPhotographer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form fields
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    if (!credential || !password) {
      toast.error('All fields are required', { position: 'top-right' });
      return;
    }
  
    const userData = { credential, password };
  
    try {
      const response = await fetch('http://localhost:3250/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || 'Something went wrong', { position: 'top-right' });
        return;
      }
  
      const result = await response.json();
  
      // Check if the user's role is "photog"
      if (result.user.role !== 'photog') {
        toast.error('Access denied! Only photographers can log in here.', { position: 'top-right' });
        return;
      }
  
      toast.success('Login successful!', { position: 'top-right' });
  
      // Store user data and token in Redux and localStorage
      dispatch({ type: SET_USER, payload: result.user }); // Save user data in Redux
      localStorage.setItem('token', result.token); // Save token to localStorage
  
      navigate('/user'); // Redirect user to user dashboard
    } catch (err) {
      console.error('Error:', err);
      toast.error('Some error occurred.', { position: 'top-right' });
    }
  };
  
  // Handle key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };


  return (
    <div
      className="pb-10 z-10"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={Logo} className="w-[300px] flex items-start justify-start" alt="Logo" />
      <div className="flex items-center justify-center flex-col">
        <div className="bg-[#0A0B0C] p-5 flex md:w-[400px] max-w-[400px] flex-col items-center justify-center rounded-md text-white gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[30px]">Login As</h1>
            <p className="font-thin opacity-50">Admin</p>
          </div>
         
          <input
            type="text"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Email or phone number"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            type="password"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          
          <button
            className="bg-[#B60418] text-white h-[40px] max-w-[350px] md:w-[350px] hover:bg-red-500 rounded-md"
            style={{ minHeight: "50px", lineHeight: "40px", minWidth: "100px" }}
            onClick={handleLogin}
          >
            Login
          </button>
          <p>Are you new here?<Link to={'/phot'}>SignUp</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
