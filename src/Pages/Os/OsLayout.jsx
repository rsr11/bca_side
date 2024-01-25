import React from 'react'
import OsIndex from './OsIndex'
import { Outlet } from 'react-router-dom'

const OsLayout = () => {
  return (
    <div className='flex gap-5' >
      <div>
      <OsIndex/>
      </div>

      <div>
       <Outlet/>
      </div>
    </div>
  )
}

export default OsLayout
