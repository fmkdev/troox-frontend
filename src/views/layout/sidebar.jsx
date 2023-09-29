import logo from '../../application/assets/troo-logo-svg.svg';
const sidebar = () => {
    return ( 
        <div className=' text-white'>
            <div className=' grid gap-[2.5rem] w-[80%] mt-2'>
                <div className=''>
                    <img className=' w-[90%]' src={logo} alt="Troo Logo" />
                </div>
                <div className=' flex flex-col w-[90%] py-2 px-6  rounded-[5px] bg-secondaryTomato'>
                    <div className='flex justify-center gap-4'>
                        <span>Mega Chicken</span>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <p>Restaurant</p>
                </div>
                <p className=' text-xs font-thin'>MY RESTAURANT</p>
            </div>

        </div>
     );
}
 
export default sidebar;