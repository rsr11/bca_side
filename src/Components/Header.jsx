import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='h-24 bg-slate-100 flex border-b-[1px] border-black items-center'>
      <h1 className='text-4xl font-bold ml-5'> <Link to={"/"} className='hover:no-underline'> BCA_Notes </Link></h1>
    </header>
    <nav className='bg-slate-100 '>
        <ul className='flex gap-10 md:px-10 px-2 sm:px-3 py-3 overflow-x-auto' >
            <li> <Link to={"/oprating-system"}> Oprating System </Link> </li>
            <li> <Link to={"/dbms"}> DBMS </Link> </li>
            <li> <Link to={"/evs"}> Environment Studies </Link> </li>
            <li> <Link> Software Testing </Link> </li>
            <li> <Link> Big Data </Link> </li>
        </ul>
    </nav>
    </>
  )
}

export default Header
