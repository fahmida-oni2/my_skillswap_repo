import React, { use } from 'react';
import { Links, NavLink } from 'react-router';
import './Navbar.css'
import { Link } from 'react-router';
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
  const {user,signOutUser} = use(AuthContext);
   const handleLogOut =() =>{
     signOutUser()
          .then(result => {
              console.log(result.user)
              
            })
            .catch(error => {
               console.log(error)
            })
    console.log("user trying to logout")
   }
    const links = <>
    <li><NavLink  to='/' className='m-2'>Home</NavLink></li>
    <li><NavLink to='/skills'  className='m-2'>Skills</NavLink></li>
    <li><NavLink to='/profile'  className='m-2'>Profile</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
        <div>{user && user.email }</div>
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
    <Link to='/' className=" text-xl font-extrabold text-sky-800">SkillSwap</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  {
    user ? (<button onClick={handleLogOut}  className='btn btn-primary m-2  grid md:flex lg:flex'>LogOut</button>) : (<div className="navbar-end grid md:flex lg:flex">
    <Link to='/auth/login' className='btn btn-primary m-2'>Login</Link>
    <Link to='/auth/register' className='btn btn-primary m-2'>Sign Up</Link>
  </div>)
  }
  
</div>
    );
};

export default Navbar;