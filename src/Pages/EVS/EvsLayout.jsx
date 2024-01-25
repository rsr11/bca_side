import React from 'react'
import { Outlet } from 'react-router-dom'
import EvsIndex from './EvsIndex'

const EvsLayout = () => {
  return (
    <div className='flex gap-5' >
    <div>
    <EvsIndex/>
    </div>

    <div>
     <Outlet/>
    </div>
  </div>
  )
}

export default EvsLayout
