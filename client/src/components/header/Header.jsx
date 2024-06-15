import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoSearchOutline} from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = ()=>{
    
    const [isMenuOpen, setMenuOpen] = useState(false)
 
    const pages = ["home", "about", "projects"];
    const modifiedPages = pages.map((e,i)=> e.charAt(0).toUpperCase() + e.slice(1))
    console.log(modifiedPages)


    const handelMenuClick = ()=>{
        setMenuOpen(!isMenuOpen)
     
    }

    


    return (
        <header className="relative border-b-2 pb-2 ">
            
            <ContentWrapper>
                <nav className="flex flex-row items-center justify-between pt-2 ">

                    <NavLink >
                        <span className="bg-yellow-500 px-2 py-[2px] text-white font-semibold  rounded-md bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">Saurabh's</span>Blog
                    </NavLink>

                    <span className=" items-center flex flex-row border-2 py-[4px] px-2  rounded-full md:rounded-md outline-0">
                        <input className="hidden sm:inline outline-none" type="text" placeholder="Search..." />
                        <IoSearchOutline className="text-xl" />
                    </span>

                    <ul className="flex flex-row hidden md:flex gap-4  lg:gap-10">
                       {modifiedPages.map((e,i)=> <li key={i} ><NavLink >{e}</NavLink></li>)}
                    </ul>

                    <span className="flex flex-row items-center gap-4">
                        <MdDarkMode className="text-xl hidden md:inline" />
                        <button className="px-3 py-[4px] text-base font-semibold rounded-md  text-white bg-gradient-to-r from-purple-600  to-blue-600"> Sign In</button>
                        {isMenuOpen ? <IoMdClose onClick={handelMenuClick}  className="text-2xl md:hidden" /> : <GiHamburgerMenu onClick={handelMenuClick} className="text-2xl sm:hidden" /> }
                    </span>

                    

                    



                </nav> 
                   
            </ContentWrapper>

            {<div className={`${isMenuOpen ? "animate-slideDown" : "animate-slideUp"}  bg-blue-500  absolute    top-[100%] z-10 w-full  flex flex-col text-black  text-lg font-bold md:hidden`}>
                    {modifiedPages.map((e,i)=> (
                        <h1 className="bg-zinc-400 border-b-2 pb-4 pt-2 pl-[20px]">{e}</h1>
                    ))}
                        
                    
            </div> }

             
            
        </header>
    )
}

export default Header;