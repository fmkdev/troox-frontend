import React from 'react'
import logo from '../../application/assets/troo-logo.png';
import flymail from '../../application/assets/fly-mail.png';
import { Link } from 'react-router-dom';

const VerifyMail = () => {
  return (
    <div className="h-[100vh] flex flex-col bg-secondary items-center justify-center gap-12 text-center ">
            <div>
                <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
            </div>
            <div className='flex flex-col items-center gap-4'>
                <img src={flymail} className='w-36 sm:w-42 ' alt="logo" />
            
                <h1 className=' text-[2rem] font-semibold tracking-tighter '>Great, you are almost done!</h1>
            
                <p className=' text-sm font-normal tracking-widest '>A confirmation email has been sent to your email. Please verify to continue.</p>
            </div>
            <Link to='/' className='flex gap-2 justify-center text-primary font-semibold '>
                <p>Next</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

            </Link>
        </div>
  )
}

export default VerifyMail
