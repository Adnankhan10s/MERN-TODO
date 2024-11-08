import React, { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  
const history = useNavigate();


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
       const { name , value }= e.target;
       setFormData({...formData , [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${window.location.origin}/api/v1/register`, formData).then((response)=>{
     toast.success(response.data.message);
     if(response.data.message == "User Already Exists"){
      formData
     }else{
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      history("/login")
     }
    
    })
  
    // toast.success("SignUp Succesfully");
  };
  return (

    <div className="flex items-center justify-center min-h-screen pt-16  bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="md:w-full w-[300px] max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button
        onClick={handleSubmit}
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
 



  )
}

export default Signup