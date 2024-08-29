import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { useAuth } from './authcontext';
import Logout from './logout.js';

function Navbar() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { username, authUser } = useAuth(); // Get authUser and username from context

    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="navbar bg-base-100 md:px-20 px-4">
            <div className="navbar-start">
                <button className="btn btn-ghost lg:hidden sm:hidden" onClick={toggleMenu}>
                    <RxHamburgerMenu className="text-3xl" />
                </button>
                <img src={logo} className="w-22 h-10" alt="Logo" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Name</a></li>
                    <li><a href="/collection">Collection</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/presents">Presents</a></li>
                </ul>
            </div>

            <div className="navbar-end flex lg:flex-row md:flex-row md:gap-5 gap-3 text-2xl relative">
                <div className="lg:hidden flex items-center gap-3">
                    <CiSearch />
                    <CiUser onClick={toggleUserMenu} />
                    {userMenuOpen && (
                        <ul className="absolute top-full right-0 mt-2 bg-white shadow-lg border rounded cursor-pointer">
                            <li><a href="/" className="text-sm px-6 py-2 block hover:bg-gray-100">Cart</a></li>
                            <li><a href="/" className="text-sm px-6 py-2 block hover:bg-gray-100">Account</a></li>
                            {authUser ? (
                                <>
                                    <li><span className="text-sm px-6 py-2 block">{username}</span></li>
                                    <li><Logout /></li>
                                </>
                            ) : (
                                <li><Link to="/login"><div className="bg-blue-500 px-3 py-2 rounded-md">Login</div></Link></li>
                            )}
                        </ul>
                    )}
                    <CiShoppingCart />
                    <div className="absolute top-[-10px] right-[-10px] bg-red-600 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">
                        3
                    </div>
                </div>

                <ul className="hidden md:flex gap-5 items-center">
                    <li><CiSearch /></li>
                    <li className="relative">
                        <CiShoppingCart />
                        <div className="absolute top-[-10px] right-[-10px] bg-red-600 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">
                            3
                        </div>
                    </li>
                    <li className="relative flex items-center">
                        <CiUser onClick={toggleUserMenu} className="text-2xl" />
                        {userMenuOpen && (
                            <ul className="absolute top-full right-0 mt-2 bg-white shadow-lg border rounded cursor-pointer">
                                <li><a href="/" className="text-sm px-6 py-2 block hover:bg-gray-100">Cart</a></li>
                                <li><a href="/" className="text-sm px-6 py-2 block hover:bg-gray-100">Account</a></li>

                            </ul>
                        )}
                    </li>
                    {authUser ? (
                        <li>
                           
                                <Logout/>
                               
                         
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">
                                <button className="bg-blue-600 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                                    login
                                </button>
                            </Link>
                        </li>
                    )}

                </ul>

                {menuOpen && (
                    <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col items-center p-6 shadow-lg">
                        <button className="absolute left-10 text-3xl" onClick={toggleMenu}>X</button>
                        <ul className="flex flex-col gap-4 mt-8">
                            <li><a href="/" className="text-black text-lg">Home</a></li>
                            <li><a href="/about" className="text-black text-lg">About</a></li>
                            <li><a href="/collection" className="text-black text-lg">Collection</a></li>
                            <li><a href="/presents" className="text-black text-lg">Presents</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
