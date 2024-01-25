import React from 'react'
import { Outlet } from 'react-router-dom'
import DBMSIndex from './DBMSIndex'

const DbmsLayout = () => {
  return (
    <div className='sm:flex sm:gap-5' >
      <div>
      <DBMSIndex/>
      </div>

      <div className='pt-10 sm:pt-0  sm:border-t-0 border-t-2 border-black '>
       <Outlet/>
      </div>
    </div>
  )
}

export default DbmsLayout
