import React, { useContext, useEffect, useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

  const {user} = useContext(AuthContext);
  const {signOutUser} = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () =>{
    signOutUser()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    // Close dropdown if clicked outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
        <div className='container'>           
            <nav className="w-full">
              <div className="flex flex-wrap items-center justify-between">
              <div></div>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-x-3 items-center">
                  {user ? (
                    <div className="relative" ref={dropdownRef}>
                      <img
                        onClick={toggleDropdown}
                        className='w-8 h-8 cursor-pointer rounded-full'
                        src={userIcon}
                        alt="userIcon"
                      />
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                          <div className="px-4 py-2 text-sm text-gray-700 border-b">
                            {user.displayName || "User"}
                          </div>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to="/auth/login"
                      className="bg-[#403f3f] px-4 sm:px-8 sm:py-1 text-white last-of-type:border-r-0"
                    >
                      Login
                    </Link>
                  )}                  
                  <button data-collapse-toggle="navbar-sticky" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-sticky" aria-expanded="false">
                    <FiMenu className='w-12 h-12 font-semibold' />
                </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <NavLink to='/' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D72050] md:p-0">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D72050] md:p-0">About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/career' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D72050] md:p-0">Career</NavLink>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
        </div>
    );
};

export default Navbar;