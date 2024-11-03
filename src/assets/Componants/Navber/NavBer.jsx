import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill ,  } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
const NavBer = () => {
    const [open,setOpen] =useState (false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/blog", name: "Blog" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="text-black bg-blue-500 ">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)} >

        {
            open === true ? 
             <IoIosCloseCircle></IoIosCloseCircle>
            : 
            <RiMenu2Fill></RiMenu2Fill>
        }
        
      </div>
      <ul className={ `md:flex  duration-1000 absolute md:static
        ${open ? 'top-6' : '-top-52'}
        bg-yellow-50  px-6 shadow-lg`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBer;
