import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../App.css"

const DBMSIndex = () => {
  return (
    <>
     
    <aside className=' sm:h-[100vh] border-t-2 sm:border-t-0 border-black pt-3'>
      <ul className='sm:p-5 p-2 flex sm:flex-col overflow-x-auto gap-5 font-medium'>
        <li> <Link to={"/dbms"}> Introduction </Link> </li>
        <li> <NavLink to='/dbms/relational-data-model'>Relational Data Model and its opration </NavLink> </li>
        <li> <NavLink to='/dbms/functional-dependency'> Functional Dependancy </NavLink> </li>
      </ul>
    </aside>

    </>
  )
}

export default DBMSIndex
