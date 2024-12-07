import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DropdownProfile from './DropdownProfile'

function Header() {
  const [openProfile,setOpenProfile] = useState(false)
  return (
    <>
      <header className="dashboard-header">
        <Link to={'/home'} className='logolink'><div className="logo">VouxoSports</div></Link>
        <div className="search-bar" >
          <FaRegUserCircle size={25} className="mt-1 ms-3" onClick={()=>setOpenProfile((prev)=>!prev)}/>
          {
            openProfile &&(
             <DropdownProfile/>
            )
          }
          
        </div>
      </header>
    </>
  )
}

export default Header