// import React from 'react'
// import { AiOutlineDashboard } from "react-icons/ai";
// import { FaList } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// export default function Sidebar() {

//     const Navigation = [{
//         icon:<AiOutlineDashboard />
//     },
    
// ];

//   return (
//     <>
//     <aside>

//         <div className='NavigationWrapper'>
//             <ul>
//                 <li>  <Link to="/"><AiOutlineDashboard /> </Link></li>
//                 <li><Link to="projectListing"><FaList /> </Link></li>
//                 <li> <Link to="createProject"><FaPlus /> </Link></li>

//             </ul>
//         </div>


      

//     </aside>
//     </>
//   )
// }

import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const Navigation = [
    { path: "/", icon: <AiOutlineDashboard /> },
    { path: "/projectListing", icon: <FaList /> },
    { path: "/createProject", icon: <FaPlus /> }
  ];

  return (
    <aside>
      <div className='NavigationWrapper'>
        <ul>
          {Navigation.map(navItem => (
            <li key={navItem.path} className={location.pathname === navItem.path ? 'activePage' : 'unActive'}>
              <Link to={navItem.path}>{navItem.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

