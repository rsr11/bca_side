import React from 'react'
import BcaHomeImg from "../assets/BcaHomeImg.jpg";
import Subject from '../Components/Subject';
import Feedback from '../Components/Feedback';

const Home = () => {
  return (
    <>
      <div className=' mt-20 md:flex md:mx-20 mx-3 sm:mx-3'>
        <div className='md:w-1/2'>
            <h1 className='text-center md:text-5xl text-2xl'>Welcome to BCA_Notes</h1>
            <p className='md:px-16 mt-10 md:text-2xl '>Finding notes for exam at last moment ? No worry !</p>
            <p className='md:px-16 md:text-2xl mt-5'>BCA_Notes is a notes web app that provides notes of subjects based on BCA. It is a centeral hub for finding notes at last  moment of your exam.</p>
        </div>
        <div className='sm:w-1/2 mt-10 sm:mt-0'>
            <img src={BcaHomeImg} alt="" className='sm:h-[50vh]' />
        </div>
      </div>
      <Subject/>
      <Feedback/>
    </>
  )
}

export default Home
