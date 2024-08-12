import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className="flex gap-5 text-5xl font-semibold sm:text-3xl">
        <div className="text-secondary s">S</div>
        <div className="text-white v">V</div>
        <div className="text-tertiary g">G</div>
      </div>
    </div>
  )
}

export default Loader