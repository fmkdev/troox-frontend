import React from 'react'
import logo from '../../../application/assets/troo-logo.png';
import { CiUnread, CiRead } from 'react-icons/ci';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const [icon, setIcon] = useState(CiUnread);
    const [typePassword, setTypePassword] = useState("password");
    const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
    const navigate = useNavigate();

    const showPassword = () =>{
        if(typePassword === "password")
        {
            setTypePassword("text");
            setIcon(CiRead);
        } else{
            setTypePassword("password");
            setIcon(CiUnread);
        }
    }
    const showConfirmPassword = () =>{
        if(typeConfirmPassword === "password")
        {
            setTypeConfirmPassword("text");
            setIcon(CiRead);
        } else{
            setTypeConfirmPassword("password");
            setIcon(CiUnread);
        }
    }

  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col gap-2 py-[2rem] px-[1rem] items-center overflow-scroll no-scrollbar ">
            <div>
                <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
            </div>
            <div className='bg-white w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] shadow-md rounded-md flex flex-col gap-2 py-[2rem] px-[1rem] sm:px-[2rem] mt-5  '>
                
                <h1 className=' text-[32px] font-medium'>Create new password</h1>
                <p className=' w-[80%]'>Your new password must be different from previously used passwords.</p>
                <form className=' flex flex-col gap-4 text-xs w-[100%] mt-4'>
                    <div className=' flex flex-col pt-5 relative'>
                        <label htmlFor="password">Password</label>                   
                        <input className='border rounded-sm border-gray-400 px-3 py-2 mt-1 outline-gray-400' type={typePassword} placeholder='Enter Password' />
                        {typePassword === "password" && <span onClick={showPassword} className=' absolute right-4 top-11 cursor-pointer'>  <CiUnread size={25} /> </span>}
                        {typePassword === "text" && <span onClick={showPassword} className=' absolute right-4 top-11 cursor-pointer'> <CiRead size={25} /> </span>}                       
                    </div>
                    <div className=' flex flex-col pt-5 relative'>
                        <label htmlFor="confirm password">Confirm Password</label>                   
                        <input className='border rounded-sm border-gray-400 px-3 py-2 mt-1 outline-gray-400' type={typeConfirmPassword} placeholder='Enter Your Password' />
                        {typeConfirmPassword === "password" && <span onClick={showConfirmPassword} className=' absolute right-4 top-11 cursor-pointer'>  <CiUnread size={25} /> </span>}
                        {typeConfirmPassword === "text" && <span onClick={showConfirmPassword} className=' absolute right-4 top-11 cursor-pointer'> <CiRead size={25} /> </span>}                       
                    </div>
                    <div className='pt-5'>
                        <button 
                            onClick={() => {navigate('/password/success')}}
                            type="button" 
                            className="p-2 w-[100%] bg-primary text-white border-none rounded">
                            Reset password
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Reset
