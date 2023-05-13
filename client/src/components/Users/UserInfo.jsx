import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../action/userAction";
import pic from '../../assets/profile.jpg'

function UserTable() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-screen-lg mx-auto">
  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-6 md:mb-8">
    <div className="md:order-2 w-full md:w-2/5 mb-4 md:mb-0">
      <div className="bg-gray-100 p-3 rounded-md overflow-hidden">
        <img
          src={pic}
          alt={`Profile pic for ${currentUser.name}`}
          className="w-full object-cover"
        />
      </div>
    </div>
    <div className="md:order-1 w-full md:w-3/5">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
        User Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col mb-4 md:mb-6">
          <label
            htmlFor="name"
            className="text-lg md:text-xl font-bold text-gray-700 mb-1"
          >
            Name
          </label>
          <div className="bg-gray-100 p-3 rounded-md">
            <span className="text-lg md:text-xl font-medium text-gray-800">
              {currentUser.name}
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-6">
          <label
            htmlFor="email"
            className="text-lg md:text-xl font-bold text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="bg-gray-100 p-3 rounded-md">
            <span className="text-lg md:text-xl font-medium text-gray-800">
              {currentUser.email }
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-6">
          <label
            htmlFor="username"
            className="text-lg md:text-xl font-bold text-gray-700 mb-1"
          >
            Username
          </label>
          <div className="bg-gray-100 p-3 rounded-md">
            <span className="text-lg md:text-xl font-medium text-gray-800">
              {currentUser.email.split('@')[0]}
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-6">
          <label
            htmlFor="password"
            className="text-lg md:text-xl font-bold text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="bg-gray-100 p-3 rounded-md">
            <span className="text-lg md:text-xl font-medium text-gray-800">
              ********
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default UserTable;