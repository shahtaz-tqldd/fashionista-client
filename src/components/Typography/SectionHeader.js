import React from 'react'

const SectionHeader = ({children}) => {
    return (
        <h1 className="text-center lg:text-5xl md:text-3xl text-2xl font-bold pt-5 mb-10">
            <span className='textGradient'>{children}</span>
        </h1>
    )
}

export default SectionHeader