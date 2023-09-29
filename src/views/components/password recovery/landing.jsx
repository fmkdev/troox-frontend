import React from 'react'
import logo from '../../../application/assets/troo-logo.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { TbLockQuestion, TbMail, TbPhone } from 'react-icons/tb';
const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col gap-2 py-[2rem] px-[1rem] items-center overflow-scroll no-scrollbar ">
            <div>
                <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
            </div>
            <div className='bg-white text-center w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] shadow-md rounded-md flex flex-col gap-2 py-[2rem] px-[0.5rem] items-center mt-5  '>
                <h4 className=' bg-secondary p-4'><TbLockQuestion size={30} /></h4>
                <h1 className=' text-[32px] font-medium'>Forgot password?</h1>
                <p className=' w-[70%]'>Do not worry! We will help you recover your password</p>
                <form className=' text-start grid gap-4 text-xs w-[85%] sm:w-[80%] md:w-[70%] lg:w-[65%] mt-4'>
                    <div className=' flex flex-col items-start gap-2 px-[1rem] py-[1rem] bg-secondary rounded-md'>
                        <div className=' flex gap-4'>
                            <input type='checkbox'  className='w-4' />
                            <h4 className=' text-sm font-bold'>Send to your mail </h4>
                            <TbMail size={20} />
                        </div>
                        <div className=' flex gap-8 text-start'>
                            <div></div>
                            <p>Get a password reset link via j*******@gmail.com</p>
                        </div>                        
                    </div>
                    <div className=' flex flex-col items-start gap-2 px-[1rem] py-[1rem] bg-secondary rounded-md'>
                        <div className=' flex gap-4'>
                            <input type='checkbox' className='w-4' />
                            <h4 className=' text-sm font-bold'>Send to your phone number </h4>
                            <TbPhone size={20} />
                        </div>
                        <div className=' flex gap-8 text-start'>
                            <div></div>
                            <p>Get a security code via SMS to +234*********45</p>
                        </div>                        
                    </div>
                    <div className='pt-5'>
                        <button 
                            onClick={ () => {navigate('/password/mailsent')}}
                            type="button" 
                            className="p-2 w-[100%] bg-primary text-white border-none rounded">
                            Get a reset link
                        </button>
                    </div>
                    <div className=' text-center'>
                        <Link to={'/'} className=' text-primary font-medium '>Go back</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Landing
