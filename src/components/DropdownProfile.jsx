import React from 'react'
import { FaBell, FaDoorOpen, FaMoneyBill, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const DropdownProfile= ()=>{
  return (
    <div className='drop flex flex-col' style={{width:'140px'}}>
         <ul className='flex flex-col gap-5 p-2 pb-0 ps-2' style={{cursor:'pointer'}}>
            <Link to={'/myprofile'} className="logolink"><li><FaUser className='me-2'/>My Profile</li></Link>
            <Link to={'/notifications'} className="logolink"><li><FaBell className='me-2'/>Notifications</li></Link>
            <Link to={'/plans'} className="logolink"><li><FaMoneyBill className='me-2'/>Subscription</li></Link>
            <Link to={'/'} className="logolink"><li><FaDoorOpen className='me-2'/>Logout</li></Link>
          </ul>
    </div>
  )
}

export default DropdownProfile