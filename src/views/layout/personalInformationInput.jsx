import { useState } from "react";
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
const PersonalInformationInput = () => {
    const [dispalyBI, setDisplayBI] = useState(false);
    const [displayCD, setDisplayCD] = useState(true);
    const [displayCU, setDisplayCU] = useState(false);

        const handleClick = () => {
            if(!dispalyBI) {
                setDisplayBI(true);
                setDisplayCD(false);
                setDisplayCU(true);
            }else{
                setDisplayBI(false);
                setDisplayCD(true);
                setDisplayCU(false);
            }
        }
    return ( 
        <div className=" border border-secondaryB p-4 rounded-md">
            <div className=" flex justify-between ">
                <span className=" text-xl font-normal">Personal Information</span>
                {displayCD && <span id="cursordown" onClick={() => handleClick()} className=" cursor-pointer">
                    <HiChevronDown size={25} />
                </span>}
                { displayCU && <span id="cursorup" onClick={() => handleClick()}  className=" cursor-pointer">
                    <HiChevronUp size={25} />
                </span>}
            </div>
            { dispalyBI && <div id="bInfo" className=" m-2">
                <p className=" text-sm font-normal py-2">Please make sure that your personal details remain up-to-date. Because this 
                        information is used to verify your identity. You will need to send our Support Team a
                        message if you need to change it.
                </p>                
                <div className="">  
                    <div className=" grid sm:grid-flow-col gap-4">
                        <div className='flex flex-col pt-5'>
                            <label htmlFor="text">First name</label>
                            <input type="text" className='border-2 rounded-md border-gray-500  py-2 px-3 mt-1 outline-secondary' />
                        </div>
                        <div className='flex flex-col pt-5'>
                            <label htmlFor="text">Last name</label>
                            <input type="text" className='border-2 rounded-md border-gray-500  py-2 px-3 mt-1 outline-gray-400' />
                        </div>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Registered home address</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">City</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="text">State</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' /> 
                    </div> 
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Country</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>                    
                </div>
            </div> }
        </div>
     );
}
 
export default PersonalInformationInput;