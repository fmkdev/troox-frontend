import { useState } from "react";
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

const BankDetailsInput = () => {
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
                <span className=" text-xl font-normal">Payout & bank details</span>
                {displayCD && <span id="cursordown" onClick={() => handleClick()} className=" cursor-pointer">
                    <HiChevronDown size={25} />
                </span>}
                { displayCU && <span id="cursorup" onClick={() => handleClick()}  className=" cursor-pointer">
                    <HiChevronUp size={25} />
                </span>}
            </div>
            { dispalyBI && <div id="bInfo" className=" m-2">
                <p className=" text-sm font-normal py-2">Please enter your bank account information. You’ll receive a four-digit 
                    verification code via text message. Once you enter the code Troo will all payouts to 
                    the account
                </p>                
                <div className="">
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Account holder name or business name</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Bank Verification Number (BVN)/IBAN</label>
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
 
export default BankDetailsInput;