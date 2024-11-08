import React, { useState } from 'react'
import logo from '../assets/logo2.png';
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

// import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Navbar = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () =>{
    sessionStorage.clear("id");
   dispatch(authActions.logout());
  }

  const styleForPaper = {
    width: '50px',
    height: '50px',


  };
  const toggleNav = () => {
    setNav(!nav)
  }
  const closeNav = () => {
    setNav(false)
  }
  const menuVarients = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      }
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      }
    }
  }

  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className='hidden w-full px-10 h-[80px] bg-slate-400 md:flex justify-between items-center border-b-2 border-slate-300 content-center fixed '>
       <Link to="/"><img src={logo} className='w-[150px] h-[60px]' /></Link> 

        <div  >
          <ul className='flex justify-center items-center gap-5'>
           <Link to="/"> <li className='font-bold font-serif hover:text-gray-600 cursor-pointer'>Home</li></Link>
           <Link to="/about"><li className='font-bold font-serif hover:text-gray-600 cursor-pointer'>About</li></Link>
           <Link to="/todo"><li className='font-bold font-serif hover:text-gray-600 cursor-pointer'>Todos</li></Link>

        {!isLoggedIn && (<>
          <Link to="/signup">
            <button className='px-4 py-2 bg-green-500 rounded'>
              Sign Up
            </button>
            </Link>
            <Link to="/login">
            <button className='px-4 py-2 bg-green-500 rounded'>
              Log In
            </button>
            </Link>
        </>)}

           {
            isLoggedIn && (<>
                <Link  to="/">
            <button onClick={logout} className='px-4 py-2 bg-green-500 rounded'>
              Log Out
            </button>
            </Link>
            </>)
           }
            
           
            {/* <li>
            <AccountBoxIcon fontSize='large'/>
        </li> */}
          </ul>
        </div>
      </nav>


      {/* //Mobile View */}
      <div className='md:hidden fixed z-40 w-full h-[100px] bg-slate-400 border-b-2 border-slate-300 flex  justify-between items-center p-5 '>

        <div>
        <Link to="/"><img src={logo} alt="Logo" className='w-[150px] h-[60px]' /></Link>
        </div>
        <div onClick={toggleNav} className='absolute top-4 right-4 border rounded-lg text-black/75 border-black/80 p-2 ' >
          {nav ? <CloseIcon style={styleForPaper} /> : <MenuOpenIcon style={styleForPaper} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVarients}
          className='fixed  top-0 left-0 w-full h-screen z-40 bg-white/30  backdrop-blur-xl '
        >
          <div className='w-full h-[100px] flex justify-between items-center content-center border-b-2 border-black'>
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-4 border rounded-lg text-black border-black/80 p-2 ">
              {nav ? <CloseIcon style={styleForPaper} /> : <MenuOpenIcon style={styleForPaper} />}
            </div>
            <img src={logo} alt='logo' className=' w-[150px] h-[60px] text-black  px-5 ' />

          </div>

          <ul className='flex flex-col justify-center items-center mt-6 gap-6'>
          <Link to="/"> <li onClick={toggleNav} className='text-4xl font-bold font-serif text-blue-950 hover:text-gray-600 cursor-pointer'>Home</li> </Link>
          <Link to="/about"><li onClick={toggleNav} className='text-4xl font-bold font-serif text-blue-950 hover:text-gray-600 cursor-pointer'>About</li></Link>
          <Link to="/todo"><li onClick={toggleNav} className='text-4xl font-bold font-serif text-blue-950 hover:text-gray-600 cursor-pointer'>Todos</li></Link>
          
          {!isLoggedIn && (<>
            <Link to="/signup">
            <button onClick={toggleNav} className='px-4 py-2 bg-green-500 rounded'>
              Sign Up
            </button>
            </Link>
            <Link to="/login">
            <button onClick={toggleNav} className='px-6 py-2 bg-green-500 rounded'>
              Log In
            </button>
            </Link>
          </>)}
          {isLoggedIn && (<>
            <Link onClick={logout} to="/">
            <button onClick={toggleNav} className='px-4 py-2 bg-green-500 rounded'>
              Log Out
            </button>
            </Link>
          </>)}
            
          </ul>

        </motion.div>

      </div>

    </>
  )
}

export default Navbar