import React from 'react'

const BigDataLayout = () => {
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

export default BigDataLayout
