import React from 'react'
import logo from '../../../application/assets/troo-logo.png';
import { TbMailUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const MailSent = () => {
  const navigte = useNavigate();

  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col gap-2 py-[2rem] px-[1rem] items-center no-scrollbar ">
      <div>
          <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
      </div>
      <div className='bg-white text-center w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] shadow-md rounded-md flex flex-col gap-4 py-[2rem] px-[0.5rem] items-center mt-5  '>
        <h4 className=' bg-secondary p-4'><TbMailUp size={40} /></h4>
        <h1 className=' text-[32px] font-medium'>Check your mail</h1>
        <p className=' w-[70%]'>We have sent a password recover instruction to your email</p>
        <button 
          onClick={ () => {navigte('/password/reset')}}
          type="button" 
          className="p-2 w-[100%] bg-primary text-white border-none rounded">
          Open email app
        </button>
      </div>
    </div>
  )
}

export default MailSent
