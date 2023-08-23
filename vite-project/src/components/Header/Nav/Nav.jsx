import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <nav className='hidden lg:block'>
    <ul className='flex text-[16px] font-medium'>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>Home</Link>
     </li>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>Services</Link>
     </li>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>Work Process</Link>
     </li>
     <li className='mx-3 text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link to='/'>Blog</Link>
     </li>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>Portfolio</Link>
     </li>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>About</Link>
     </li>
     <li className='mx-3 hover:text-[#f87854] transition delay-300 duration-300 ease-in'>
     <Link>Contact</Link>
     </li>
    </ul>
 </nav>
  )
}

export default Nav