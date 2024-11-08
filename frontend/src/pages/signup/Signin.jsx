import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { authActions } from '../../store';
const Signin = () => {
  const dispatch = useDispatch();
  
  const history = useNavigate();



  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name , value }= e.target;
    setFormData({...formData , [name]: value})
};

const handleSubmit = async (e) => {
 e.preventDefault();
 await axios.post("http://localhost:5000/api/v1/signin", formData).then((response)=>{
 toast.success("Logged In Successfully");
  sessionStorage.setItem("id", response.data.others._id);
  dispatch(authActions.login());


  history("/todo");
 
 });  };
  return (

    <div className="flex items-center justify-center min-h-screen pt-16  bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="md:w-full w-[300px] max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
        
        
        
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
          Log In
        </button>
      </form>
    </div>
 



  )
}

export default Signin