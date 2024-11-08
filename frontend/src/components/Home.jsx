import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='w-full h-[535px] text-white pt-24 content-center z-10'>
      <div className='w-full flex justify-center items-center '>
        <div className='container px-10 flex flex-col justify-center items-center'>
          <h1 className='md:text-6xl text-2xl font-bold text-center'>
            Organize Your  <br /> Work & Life, Finally.
          </h1>
          <p className='mt-3 font-semibold mb-4 text-[12px] md:text-[16px]'>
            Become focused, organized, and calm with <br /> Todo App. The World's #1 Task Manager App.
          </p>
          <div className='font-semibol '>
          <button className='px-4 py-2 bg-green-500 rounded'>
           <Link to="/signin"> Create Todo</Link>
          </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home