
import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io"
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();

  const Navigation = [
    { path: "/", icon: <AiOutlineDashboard /> },
    { path: "/projectListing", icon: <FaList /> },
    { path: "/createProject", icon: <IoMdAdd /> }
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
      <Link to={"/login"} className=" desk-logout"><MdLogout /></Link>


    </aside>
  );
}

