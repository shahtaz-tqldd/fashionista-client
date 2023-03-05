import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader