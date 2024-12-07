import React from 'react'
const DropdownProfile= ()=>{
  return (
    <div className='drop flex flex-col'>
         <ul className='flex flex-col gap-4'>
            <li>Profile</li>
            <li>Notifications</li>
            <li>Subscription</li>
            <li>Logout</li>
          </ul>
    </div>
  )
}

export default DropdownProfile