import BusinessInformation from '../layout/businessInformationInput';
import PayoutBankDetails from '../layout/bankDetailsInput';
import PersonalInformation from '../layout/personalInformationInput';
import logo from '../../application/assets/troo-logo.png';
import ActionButton from '../components/button/actionButton';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate();
    return ( 
        <div className="h-[100vh] bg-secondary flex flex-col pt-12 items-center overflow-y-scroll no-scrollbar  ">
            <div>
                <img src={logo} className='w-42 sm:w-42 ' alt="logo" />
            </div>
            <div className='bg-white shadow-md rounded-md w-[90%] lg:w-[60%] h-[100%] flex flex-col p-8 my-5 '>
                <h4 className=' font-semibold mb-4 '>Business Profile | ID:TR89340</h4>
                <form className=' flex flex-col gap-4 text-xs overflow-y-scroll no-scrollbar'>
                    <BusinessInformation />  
                    <PersonalInformation /> 
                    <PayoutBankDetails />
                    <div className=' flex justify-end gap-4'>
                        <ActionButton onClick={ () => {navigate('/dashboard')} } link={'/login'} name={'Save and continue'} className={' bg-primary text-white px-8 py-4 hover:bg-primaryLight'} />
                        <ActionButton onClick={ () => {navigate('/')} }  name={'Cancel'} className={' bg-secondaryDanger text-white px-8 hover:bg-secondaryDangerLight'} />
                    </div>      
                </form>
            </div>
        </div>
     );
}
 
export default Onboarding;