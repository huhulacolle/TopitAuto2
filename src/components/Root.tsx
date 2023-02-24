import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <br />
      <div className='text-center h1'>
        <p>Topit'Auto</p>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
