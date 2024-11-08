import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Signin from './pages/signup/Signin';
import Todo from './pages/todo/Todo';
import { useDispatch } from 'react-redux';
import { authActions } from './store';


const App = () => {
    
  const dispatch = useDispatch();

  useEffect(() => {
   const id = sessionStorage.getItem("id");
   if(id){
   dispatch(authActions.login());
   }
  }, []);
  
  return (
    <div className='h-screen w-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/todo' element={<Todo />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Signin />}/>


        </Routes>
      </Router>

      {/* <Home /> */}
   
      <Footer />
    </div>
  )
}

export default App