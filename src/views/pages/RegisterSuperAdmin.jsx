import { useState } from 'react';
import logo from '../../application/assets/troo-logo.png';
import {CiRead, CiUnread } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import services from '../../ioc/services';
import { useDispatch } from 'react-redux';


const RegisterSuperAdmin = () => {
    
    const [icon, setIcon] = useState(CiUnread);
    const [typePassword, setTypePassword] = useState("password");
    const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
    const [ showPasswordError, setShowPasswordError ] = useState(false);
    const [ activePassword, setActivePassword ] = useState(true);

    //inputs
    const [businessName, setBusinessName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [pinCode, setPincode] = useState('');
    const [confirmPinCode, setConfirmPincode] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    const validatePassword = () =>{
        if(password.trim() === confirmPassword.trim())
        {
            setShowPasswordError(false);
            setActivePassword(true);
            return true;
        }else{
            setActivePassword(false);
            setShowPasswordError(true);
            return false;
        }
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
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
    const formDetails = {   businessName: businessName, 
                            businessEmail: businessEmail,
                            passwordHash: password,
                            confirmPassword: confirmPassword,
                            pincode: pinCode,
                            confirmPincode: confirmPinCode
                        }
    const handleSubmit= (e) =>{
        if(validatePassword())
        {
            if(businessEmail.trim() !== '' && businessName.trim() !== ''
                && pinCode.trim() !== '' && confirmPinCode.trim() !== ''
                ){
                    services.api.userRequests.createAdmin(formDetails)
                    .then((response) => {
                        if(response.status === true)
                        {
                            services.toast.success(response.message);
                            navigate('/verifymail');
                        }else{
                            services.toast.error(response.message);
                        }
                    });
            }
            else{
                services.toast.error('Fill in appropriate data')
            }
        }else{
            return
        }
    }
    return ( 
        <div className="h-[100vh] bg-slate-100 flex flex-col p-20 items-center overflow-y-scroll ">
            <div>
                <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
            </div>
            <div className='bg-white shadow-md rounded-md flex flex-col justify-center p-8 mt-5 '>
                <h4>New Account</h4>
                <form className=' text-xs'>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="Business Name" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Business Name</label>
                        <input 
                            onChange={(e) => {setBusinessName(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type="text" 
                            placeholder='Business name' />
                    </div>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="email" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Business Email</label>
                        <input 
                            onChange={(e) => {setBusinessEmail(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type="email" 
                            placeholder='Business email' />
                    </div>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="password" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Password</label>                   
                        <input 
                            onChange={ (e) => {setPassword(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type={typePassword} 
                            placeholder='Enter Password' />
                        {typePassword === "password" && <span onClick={showPassword} className=' absolute right-4 top-7 cursor-pointer'>  <CiUnread size={25} /> </span>}
                        {typePassword === "text" && <span onClick={showPassword} className=' absolute right-4 top-7 cursor-pointer'> <CiRead size={25} /> </span>}
                    </div>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="confirm password" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Confirm Password</label>                   
                        {activePassword && <input 
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type={typeConfirmPassword} 
                            placeholder='Confirm Your Password'
                             />}
                        {showPasswordError && <input 
                            onClick={() => {
                                setShowPasswordError(false);
                                setActivePassword(true);
                            }}
                            readOnly
                            className='border rounded-sm border-secondaryDanger px-3 py-2 mt-1 outline-secondaryDanger' 
                            type={typeConfirmPassword} 
                            placeholder='Confirm Your Password'
                            value={confirmPassword} />}
                        {typeConfirmPassword === "password" && <span onClick={showConfirmPassword} className=' absolute right-4 top-7 cursor-pointer'>  <CiUnread size={25} /> </span>}
                        {typeConfirmPassword === "text" && <span onClick={showConfirmPassword} className=' absolute right-4 top-7 cursor-pointer'> <CiRead size={25} /> </span>}
                    </div>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="pin" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Create pin <span className='  font-light text-gray-400'>(create a four-digit pin)</span></label>                   
                        <input 
                            onChange={(e) => {setPincode(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type="text" 
                            placeholder='Create pin (create a four-digit pin)' />
                    </div>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="confirm pin" className=' absolute text-[0.6rem] bg-white px-[0.3rem] top-4 left-2 '>Confirm pin <span className='  font-light text-gray-400'></span></label>                   
                        <input 
                            onChange={(e) => {setConfirmPincode(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type="text" 
                            placeholder='Confirm pin' />
                    </div>
                    <div className='pt-5'>
                    <button 
                        onClick={() => {navigate('/verifymail')}}
                        type="button" 
                        className="py-2 px-40 bg-primary text-white border-none rounded">
                        Signup
                    </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default RegisterSuperAdmin;