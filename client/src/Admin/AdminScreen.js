import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import { FaPizzaSlice, FaThList } from 'react-icons/fa';
import { BsDatabaseAdd } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import pic from '../assets/profile.jpg'
import { logoutUser } from "../action/userAction";


const AdminSidebar = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
      history('/');
    }
  }, [currentUser, history]);

  if (!currentUser || !currentUser.isAdmin) {
    return <><h1>Access denied</h1></>;
  }



  return (
    <div className="flex h-screen ">
      <Helmet>
        <title>Admin Pannel</title>
      </Helmet>
      {/* Sidebar */}
      <div className="bg-gray-200 w-64 px-4 py-8">
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <a href='/admin' className="flex items-center justify-center mb-8">

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full w-full">
              <span className="text-lg font-bold text-gray-100">Admin Dashboard </span>
            </button>

          </a>
          <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" alt="Logo" className="" />
          <hr />
          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/users"
                  onClick={() => handleLinkClick('users')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'users' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <FiUsers className="mr-2" />
                  <span>Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/pizzalist"
                  onClick={() => handleLinkClick('pizzas')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'pizzas' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <FaPizzaSlice className="mr-2" />
                  <span>All Menu</span>
                </Link>
              </li>

              {/* add more links as needed */}
              <li>
                <Link
                  to="/admin/addnewpizza"
                  onClick={() => handleLinkClick('addnewpizza')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'addnewpizza' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <BsDatabaseAdd className="mr-2" />
                  <span>Add Menu</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/orderlist"
                  onClick={() => handleLinkClick('orderlist')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'orderlist' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <FaThList className="mr-2" />
                  <span>OrderList</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/allcontact"
                  onClick={() => handleLinkClick('contact')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'contact' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <AiFillMessage className="mr-2" />
                  <span>Contact Data</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/settings"
                  onClick={() => handleLinkClick('settings')}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'settings' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <FiSettings className="mr-2" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <button

                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'logout' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                    }`}
                >
                  <FiLogOut className='ml-9' />
                  <span>LogOut</span>
                </button>
              </li>

            </ul>

          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-white p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;
