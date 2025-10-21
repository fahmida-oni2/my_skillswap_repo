import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
import { Link } from 'react-router';
import logo from '../../assets/logo.jpg'
const Navbar = () => {
    const links = <>
    <li><NavLink  to='/' className='m-2'>Home</NavLink></li>
    <li><NavLink to='/profile'  className='m-2'>profile</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
     <img src={logo} className='h-20 w-20 ' alt="" />
    <a className=" text-xl font-extrabold text-sky-800">SkillSwap</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end grid md:flex lg:flex">
    <Link className='btn btn-primary m-2'>Login</Link>
    <Link className='btn btn-primary m-2'>Sign Up</Link>
  </div>
</div>
    );
};

export default Navbar;