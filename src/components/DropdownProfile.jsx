import React from 'react'
const DropdownProfile= ()=>{
  return (
    <div className='drop flex flex-col' style={{width:'150px'}}>
         <ul className='flex flex-col gap-4' style={{cursor:'pointer'}}>
            <li>My Profile</li>
            <li>Notifications</li>
            <li>Subscription</li>
            <li>Logout</li>
          </ul>
    </div>
  )
}

export default DropdownProfile