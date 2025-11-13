import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import avater from '../assets/image-MTlD7Ds8.png'
import { useTheme } from 'next-themes';
import { MdDarkMode } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

const Navbar = () => {
    let {user,logOut}=use(AuthContext);
    let {theme,setTheme}=useTheme();

    let handleLogout=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Log Out Successful!",
  showConfirmButton: false,
  timer: 1500
});
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

   let links = (
  <div className="flex items-center gap-2">
    <button className='text-black p-1' onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>{theme==="light" ? <MdDarkMode /> : <FaLightbulb/> }</button>
    <NavLink className="text-black" to='/'>Home</NavLink>
    <NavLink className="text-black" to='/bills'>Bills</NavLink>
    {user && (
      <>
        <NavLink className="text-black" to='/myPayBills'>My Pay Bill</NavLink>
        <img
          src={user?.photoURL ? user?.photoURL : avater}
          alt="user"
          className="h-12 w-12 rounded-full object-cover"
        />
      </>
    )}
  </div>
);
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold text-blue-500">PAY BILL</a>
  </div>
  <div className="navbar-end">     
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
    {
      user ? <Link to='/' onClick={handleLogout} className="btn">Log Out</Link>:<>
        <Link to='/register' className="btn">Registration</Link>
        <Link to='/login' className="btn">Log in</Link>
        </>
    }
  </div>
</div>
    );
};

export default Navbar;