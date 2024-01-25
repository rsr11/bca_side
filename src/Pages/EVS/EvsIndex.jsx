import React from 'react'
import { Link } from 'react-router-dom'

const EvsIndex = () => {
  return (
    <aside className=' h-[100vh] pt-3'>
      <ul className='p-5 flex flex-col gap-5 font-medium'>
        <li> <Link to={"/evs"}> Introduction </Link> </li>

      </ul>
    </aside>
  )
}

export default EvsIndex
