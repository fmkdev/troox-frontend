import React from "react";
import { useState } from "react";
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

const BusinessInformationInput = () => {

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
                <span className=" text-xl font-normal">Business Information</span>
                {displayCD && <span id="cursordown" onClick={() => handleClick()} className=" cursor-pointer">
                    <HiChevronDown size={25} />
                </span>}
                { displayCU && <span id="cursorup" onClick={() => handleClick()}  className=" cursor-pointer">
                    <HiChevronUp size={25} />
                </span>}
            </div>
            { dispalyBI && <div id="bInfo" className=" m-2">
                <p className=" text-sm font-normal py-2">This information is required in order to verify your business. It will show up on your payout report, invoices and receipts.</p>
                <h4 className=" font-medium text-base py-2">What is the legal type of your business?</h4>
                <div className="">
                    <div className=" grid grid-flow-col grid-cols-2 gap-4  mt-2 px-2">
                        <button type="button" className=" active:bg-secondary bg-primary h-20  text-white rounded-lg border-none">
                            <p>Sole trader/Private individual</p>
                            <p>e.g. self-employed</p>
                        </button>
                        <button type="button" className=" active:bg-primary bg-secondary h-20 rounded-lg border-none">
                            <p>Other legal type</p>
                            <p>e.g. Ltd, LP, LLP, etc</p>
                        </button>
                    </div>                    
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="text">Comapny name</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-secondary' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="text">How would you categorize your business?</label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="VAT number">VAT number <span>optional</span></label>
                        <input type="text" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="Business phone number">Business phone number <span>mobile or landine</span></label>
                        <input type="number" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="text">Web page: Website, Social media page, Business listing, Google map location, etc</label>
                        <input type="link" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' placeholder="http://www.example.com" /> 
                    </div>
                    <div className="flex gap-1 mt-2">
                        <input type="checkbox" className=" w-4" />
                        <span>I don't have a website</span>
                    </div>                    
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Business address</label>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Address Line 1 </label>
                        <input type="number" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' placeholder="street address" />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Address Line 2 <span>optional</span></label>
                        <input type="number" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' placeholder="Apartment, suite, unit, building, floor" />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">City</label>
                        <input type="number" className='border-2 rounded-md border-gray-500 px-3 py-2 mt-1 outline-gray-400' placeholder="City or town" />
                    </div>
                    <div className='flex flex-col pt-5'>
                        <label htmlFor="">Business fiscal year</label>
                    </div>
                    <div className=' grid grid-flow-col gap-4 pt-5 '>
                        <span className=" flex flex-col">
                            <label htmlFor="">From:</label>
                            <input type="date" className='border-2 rounded-md border-gray-500 py-2 mt-1 outline-gray-400' />
                        </span> 
                        <span className="flex flex-col">
                            <label htmlFor="">To:</label>
                            <input type="date" className='border-2 rounded-md border-gray-500  py-2 mt-1 outline-gray-400' />
                        </span>                        
                    </div>
                </div>
            </div> }
        </div>
     );
}
 
export default BusinessInformationInput;