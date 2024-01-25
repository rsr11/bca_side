import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../App.css"

const OsIndex = () => {
  return (
    <>
    <aside className=' h-[100vh] pt-3'>
      <ul className='p-5 flex flex-col gap-5 font-medium'>
        <li> <Link to={"/oprating-System"}> Introduction </Link> </li>
        <li> <NavLink to="/oprating-system/Layour-of-architecture"> Layour of Architecture </NavLink> </li>
        <li> <NavLink to='/oprating-System/os-management'> Managements in OS </NavLink> </li>
      </ul>
    </aside>
    </>
  )
}

export default OsIndex
