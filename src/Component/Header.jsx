import React, { useState } from "react";
import "./Header.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { NavLinksItem } from "../MyData";

const Header = ({ handleClick }) => {
const [isClose, setIsClose] = useState(false);
const [mode, setMode] = useState(false);
const [isActive, setIsActive] = useState(1);

// Toggle Bar for Mobile devices
const handleToggle = () => {
setIsClose(!isClose);
};

// Toggle Mode
const handleMode = () => {
setMode(!mode);
};

// Mode Types
const handleDarkClick = () => {
document.body.classList.add("dark-mode");
document.body.classList.remove("green-mode");
document.body.classList.remove("lime-mode");
};
const handleDefaultClick = () => {
document.body.classList.remove("dark-mode");
document.body.classList.remove("green-mode");
document.body.classList.remove("lime-mode");
};
const handleLimeClick = () => {
document.body.classList.add("lime-mode");
document.body.classList.remove("dark-mode");
document.body.classList.remove("green-mode");
};
const handleGreenClick = () => {
document.body.classList.add("green-mode");
document.body.classList.remove("lime-mode");
document.body.classList.remove("dark-mode");
};

return (
<>
  <header
    className='bg-teal-900 text-white md:w-1/5 sm:w-full md:h-screen sm:h-auto sticky-top flex md:flex-col md:justify-center md:items-center navItem'>
    <nav className='flex md:flex-col items-center justify-between gap-3 px-3 px-lg-0 w-full'>
      <div className='navbar-brand hover:cursor-pointer'>
        {/* Image for Desktop  */}
        <figure className='rounded-full h-40 border-8 border-solid m-0 border-teal-700 drop-shadow md:block hidden'>
          <img src='asset/image/Ashok_opt.jpg' alt='Ashok_Img' />
        </figure>
        {/* Img For Mobile */}
        <img src='asset/image/logo.gif' alt='Name' className='md:hidden block w-1/2' />
      </div>

      {/* toggle Button For Mobile Device */}
      <button className='md:hidden block' onClick={handleToggle}>
        {!isClose ? (
        <HiBars3BottomRight className='text-5xl' />
        ) : (
        <TfiClose className='text-3xl text-white' />
        )}
      </button>
      {/* Nav Link Item */}
      <ul className={`list-none md:flex ${ !isClose ? "hidden" : "" } flex-col gap-2 navFont text-uppercase
        hover:cursor-pointer sm:bg-teal-900 m-0 p-0`}>
        {
        NavLinksItem.map(({id,name,icon})=> {
        return (
        <li className={`${isActive===id ? `bg-teal-700` :""} lg:px-6 md:px-2 py-1 rounded-2xl transition-all hover:bg-teal-700 hover:shadow-xl`}
          onClick={()=> handleClick(id, setIsActive(id))} key={id}>
          <Link className='no-underline text-white flex md:justify-start justify-center gap-2 items-center'><span>{icon}</span>{name}</Link>
        </li>
        )
        })
        }
      </ul>
    </nav>
  </header>


{/* mode  */}
  <div className={`fixed bg-teal-900 ${ !mode ? "-right-48" : "right-0" } bottom-8 text-white z-10`}>
    <ul className='p-2 flex gap-3 items-center m-0 cursor-pointer'>
      <li onClick={handleMode} title="Mode">
        {!mode ? (
        <MdArrowBackIos className='text-2xl' />
        ) : (
        <MdArrowForwardIos className='text-2xl' />
        )}{" "}
      </li>
      <li onClick={handleDefaultClick} className='w-7 h-7 bg-white border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleDarkClick} className='w-7 h-7 bg-black border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleLimeClick} className='w-7 h-7 bg-lime-300 border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleGreenClick}
        className='w-7 h-7 bg-green-900 border-4 border-solid border-gray-500 rounded-full'></li>
    </ul> 
  </div>
</>
);
};

export default Header;