import React from 'react'

const MediumButton = ({children, btnSpecially}) => {
  return (
      <button className={`px-4 py-[6px] rounded-md hover:bg-error transition duration-300 ${btnSpecially}`}>{children}</button>
  )
}

export default MediumButton