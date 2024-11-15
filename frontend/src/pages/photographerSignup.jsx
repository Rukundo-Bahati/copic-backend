import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { SET_USER } from '../redux/actionTypes';
import Logo from "../images/logo.png";
import Bg from "../images/bg.png";

export default function SignUpPhotographer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('photog'); // Default role could be 'client'

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !username) {
      toast.error('All fields are required', { position: 'top-right' });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', { position: 'top-right' });
      return;
    }

    const userData = { username, credential: email, password, role };

    try {
      const response = await fetch('http://localhost:3250/api/auth/signup', {
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
      toast.success('Signup successful!', { position: 'top-right' });
      dispatch({ type: SET_USER, payload: result.user }); // Assuming `result.user` contains user data
      navigate('/user');
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to connect to the server', { position: 'top-right' });
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
            <h1 className="font-bold text-[30px]">Sign Up As</h1>
            <p className="font-thin opacity-50">Admin</p>
          </div>
          <input
            type="text"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="bg-[#B60418] text-white h-[40px] max-w-[350px] md:w-[350px] hover:bg-red-500 rounded-md"
            style={{ minHeight: "50px", lineHeight: "40px", minWidth: "100px" }}
            onClick={handleSignUp}
          >
            Sign-up
          </button>
          <p>Already have an account? <Link to={'/photogLogin'}>Login</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
