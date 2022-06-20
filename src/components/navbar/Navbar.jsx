import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import User from '../../images/user-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
    <div className="Navbar">
           <div className="NavContainer">
               <div className="NavLogo">
                 <img src={Logo} alt="" />
               </div>
               <div className="NavLinks">
                    <Link to="findwork">Find Work</Link>
                    <Link to="timesheets">Timesheets</Link>
                     <Link to="messaging">Messaging</Link>
               </div>
               <div className="NavItems">
                  <div className="userInfo">
                    <img src={User}alt="" className="userImg" />
                   <FontAwesomeIcon icon={faCircleCheck} className="circleCheck"/>
                  </div>
                 <div className="userLogOut">
                 <Link to="">Log out</Link>
                 </div>
               </div>     
       </div>
       </div>
  )
}

export default navbar