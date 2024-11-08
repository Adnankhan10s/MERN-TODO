import React from 'react'

const About = () => {
  return (
    <section className='w-full md:h-[470px] text-white pt-32 md:pt-28 z-10'>
      <div className='w-full flex flex-col gap-5  justify-center '>
      <h1 className='text-center text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-t from-blue-600 via-green-500 to-indigo-400 '>
        About Us
      </h1>

      <p className='md:text-center px-10 text-justify text-gray-300 md:px-32 md:text-lg'>
      Hi there! I'm Adnan Khan, a passionate MERN Stack Developer. I specialize in creating seamless and user-friendly applications, combining my love for clean design with robust functionality. Building this To-Do app was a journey to create a tool that can be both practical and enjoyable for users. I’m excited to share it with you, and I hope it helps make your life just a bit more organized and stress-free. Thank you for choosing this app to manage your tasks!
      </p>
    <p className='md:text-center px-10 text-justify text-gray-300 md:px-32 md:text-lg'>
        Welcome to the ultimate productivity tool! Our To-Do app is designed to streamline your day-to-day tasks, helping you stay organized and focused. With features that let you prioritize, categorize, and set reminders, this app is tailored to support you in managing tasks effectively, no matter how packed your schedule is. Whether you’re organizing personal errands or planning work projects, this app aims to keep you on track with ease and simplicity.</p>
      </div>


    </section>
  )
}

export default About