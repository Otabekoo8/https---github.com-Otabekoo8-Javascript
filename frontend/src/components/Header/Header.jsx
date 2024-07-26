import { useEffect, useRef} from 'react'
import logo from '../../assets/logo2.avif'
import user from '../../assets/user.png'
import {NavLink, Link} from "react-router-dom";

const navLinks = [
    {
        path:'/',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find a Doctor'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    },
]

function Header() {
    return (
        <div className='header flex items-center'>
            <div className="container">
                <div className="flex selection:items-center justify-between">
                    <div>
                        <h1>Max Doctor</h1>
                        <img src={logo} alt="" />
                    </div>


                    {/* menu */}
                    <div className="navigation">
                        <ul className="menu flex gap-[2.7rem] items-center">
                            {
                                navLinks.map((Link, index)=> <li key={index}>
                                    <NavLink to={Link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]": "text-[16px] leading-7 font-[500] text-textColor hover:text-primaryColor"}>{Link.display}</NavLink>
                                    </li>)
                            }
                        </ul>
                    </div>


                    {/* right nav */}
                    <div className='flex  gap-4'>
                        <div>
                            <Link to='/'>
                                <figure className='w-[35px] h-[35px] rounded-full'>
                                    <img src={user} alt="" className='rounded-full w-full'/>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
