import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../application/assets/troo-logo.png';
import { useState, useEffect } from 'react';
import services from '../../ioc/services';
import setLoginUserDetails from '../../application/store/utils/user';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../application/store/slice/user';
import {CiRead, CiUnread, CiWarning } from 'react-icons/ci';



const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [icon, setIcon] = useState(CiUnread);
    const [type, setType] = useState("password");
    const [ showEmailError, setShowEmailError ] = useState(false);
    const [ activeEmail, setActiveEmail ] = useState(true);
    const [ showPasswordError, setShowPasswordError ] = useState(false);
    const [ activePassword, setActivePassword ] = useState(true);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loaction = useLocation();
    const userId = JSON.parse(localStorage.getItem("userDetails"))?.userId;

    const user = useSelector((state) => state.user);
    const userIdStore = user.userId;
    const userAuthLevel = user.userRoles;
    const kycVerified = user.kycExist;

    useEffect(() => {
        if (userId !== undefined && userIdStore !== null) {
            if(userAuthLevel === "super admin" && kycVerified === true)            
            {
                navigate("/dashboard");
            }
            else if(userAuthLevel === "super admin" && kycVerified === false){
                navigate("/onboarding");
            }
            else
            {
                navigate('/dashboard');
            }
        }
    }, [userId, userIdStore]);
    
    const userDetails = {businessEmail: email, password: password}
    const handleSubmit = async () => {
        
        if(handleEmailCheck(email) && password !== '')
        {
            console.log(userDetails)
            services.api.authRequest.userLogin(userDetails)
            .then((response)=>
            {
                console.log(response);
                if(response.data.status === true)
                {
                    if(response.data.role === "super admin")
                    {
                        var kycExist = services.api.userRequests.kycExist(response.data.userId)
                        .then((response) => {return response.data});
                        setLoginUserDetails({
                            userId: response.data.userId,
                            businessName: response.data.businessName,
                            email: response.data.email,
                            userRoles: response.data.roles,
                            kycExist: kycExist.status
                        });
                        dispatch(loginSuccess({
                            userId: response.data.userId,
                            businessName: response.data.businessName,
                            email: response.data.email,
                            userRoles: response.data.roles,
                            kycExist: kycExist.status
                        }));
                        services.toast.success(response.data.message);
                    
                    }else{
                        setLoginUserDetails({
                            userId: response.data.userId,
                            businessName: response.data.businessName,
                            email: response.data.email,
                            userRoles: response.data.roles,
                        });
                        dispatch(loginSuccess({
                            userId: response.data.userId,
                            businessName: response.data.businessName,
                            email: response.data.email,
                            userRoles: response.data.roles,
                            kycExist: kycExist.status
                        }))
                        services.toast.success(response.message);
                    }
                    
                }else{
                    setActiveEmail(false);
                    setActivePassword(false);
                    setShowPasswordError(true); 
                    setShowEmailError(true);
                    services.toast.error(response.message);
                    return
                }

            });
            
            
        }else{
            setActiveEmail(false);
            setActivePassword(false);
            setShowPasswordError(true);            
            setShowEmailError(true);
            services.toast.error("Fill the necessary field");
            return
        }
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
    const handleEmailCheck = email => {
        if (!isValidEmail(email)){
            return false;
        }else{
            return true;
        }
    };

    const handleToggle = () =>{
        if(type === "password")
        {
            setType("text");
            setIcon(CiRead);
        } else{
            setType("password");
            setIcon(CiUnread);
        }
    }
    return ( 
        <div className="h-[100vh] bg-slate-100 flex flex-col p-32 items-center ">
            <div>
                <img src={logo} className='w-36 sm:w-42 ' alt="logo" />
            </div>
            <div className='bg-white shadow-md rounded-md flex flex-col justify-center p-8 mt-5  '>
                <h4>Login Details</h4>
                {showEmailError && showPasswordError && <p className=' text-secondaryDanger text-xs mt-2'>Invalid email / password</p>}
                <form className=' text-xs'>
                    <div className='flex flex-col pt-5 relative'>
                        <label htmlFor="email" className=' text-[0.6rem] bg-white absolute top-4 left-2 px-[0.3rem]'>Business email</label>
                        {showEmailError && <span className=' absolute right-5 top-8'><CiWarning color='red' size={20} /></span>}
                        
                        {activeEmail && <input 
                            onChange={(e) => {setEmail(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type="email" 
                            placeholder='Business email'
                            value={email}
                        /> }
                        {showEmailError && <input 
                            onChange={(e) => {setEmail(e.target.value)}}
                            onFocus={() => {
                                setActiveEmail(true);
                                setShowEmailError(false);
                            }}
                            className='border text-secondaryDanger rounded-sm border-secondaryDanger px-3 py-2 mt-1 outline-secondaryDanger' 
                            type="email" 
                            placeholder='megachicken@restaurant.com'
                            value={email}
                        />}
                    </div>

                    {/* Input Password section */}

                    { activePassword && <div className='flex flex-col pt-5 relative'>
                        
                        <label htmlFor="password" className=' text-[0.6rem] bg-white absolute top-4 left-2 px-[0.3rem]'>Password</label>
                        <input 
                            onChange={(e) => {setPassword(e.target.value)}}
                            className='border rounded-sm border-primary px-3 py-2 mt-1 outline-primary' 
                            type={type} 
                            value={password}
                        />                        
                        {type === "password" && <span onClick={handleToggle} className=' absolute right-4 top-7 cursor-pointer'>  <CiUnread size={25} /> </span>}
                        {type === "text" && <span onClick={handleToggle} className=' absolute right-4 top-7 cursor-pointer'> <CiRead size={25} /> </span>}
                        <span className='flex justify-end '>
                            <Link to={"/password/recovery"} className='text-primary'>Forgot password?</Link>
                        </span>
                    </div>}

                    {showPasswordError && <div className='flex flex-col pt-5 relative'>
                        
                        <label htmlFor="password" className=' text-[0.6rem] bg-white absolute top-4 left-2 px-[0.3rem]'>Password</label>
                        <input 
                            onFocus={() => {
                                setShowPasswordError(false);
                                setActivePassword(true);
                            }}
                            onChange={(e) => {setPassword(e.target.value)}}
                            className='border rounded-sm text-secondaryDanger border-secondaryDanger px-3 py-2 mt-1  outline-secondaryDanger' 
                            type={type}
                            value={password}
                        />                        
                        <span className=' absolute right-5 top-8'><CiWarning color='red' size={20} /></span>
                        <span className='flex justify-end '>
                            <Link to={"/password/recovery"} className='text-primary'>Forgot password?</Link>
                        </span>
                    </div>}



                    {/*submit button section */}
                    <div className='pt-5'>
                        <button 
                            onClick={() => {navigate('/dashboard')}}
                            type="button" 
                            className="py-2 px-40 w-[100%] bg-primary text-white border-none rounded">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className=' pt-5'>
                <Link to={'/signup/superadmin'} className=' text-primary font-medium '>Create business account</Link>
            </div>
        </div>
     );
}
 
export default Login;