// import React from 'react'
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { navLink } from '../constants';
import WrapError from '../helpers/WrapError'
    
const Nav = () => {
  const path = useLocation().pathname;
  return (
   <WrapError>
     <Navbar  className='bg-gradient-to-b from-fuchsia-900 to-gray-700 md:h-[150px]  sm:px-8 py-4  ' fluid >
     
     <Navbar.Brand as={Link} to="/" >
       <img src="em.ico" className="mr-3 h-6 sm:h-9 " alt="Logo developer" />
       <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">@eilleenmaria</span>
     </Navbar.Brand>
     
     <Navbar.Toggle  />
     <Navbar.Collapse  >
       {
         navLink.map(link=>(
           <Link key={link.path} to={`/${link.path}`}>  
           <Navbar.Link             
           className='font-bold text-2xl text-white/50'  
           active={path == `/${link.path}`} as = {"div"} 
          >         
             {link.tittle}
           </Navbar.Link>
           </Link> 
         ))
       }          
     </Navbar.Collapse>
   </Navbar>
   </WrapError>
  )
}

export default Nav