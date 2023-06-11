import { Link, Outlet } from "react-router-dom";
import { FaPeopleArrows, FaBeer,FaPaypal } from 'react-icons/fa';

const DashBoard = () => {
    
  
    return (

        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <h2 className="text-2xl font-bold my-8">Student Dashboard</h2>
      <li><Link to="/dashboard/myclasses"><FaPeopleArrows></FaPeopleArrows> My Classes</Link></li>
      <li><Link><FaBeer></FaBeer>Enrolled Classes</Link></li>
      <li><Link><FaPaypal></FaPaypal>Payment History</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;