import DashBody from '../layout/dashBody';
import Sidebar from '../layout/sidebar';

const Dashboard = () => {
    return ( 
        <div className=" bg-secondary w-[100%] h-[100%]">
            <div className=" grid grid-flow-col grid-cols-5 bg-primary p-4 rounded-[25px] w-[100vw] h-[100vh]">
                <Sidebar />
                <DashBody />
            </div>
        </div>
     );
}
 
export default Dashboard;