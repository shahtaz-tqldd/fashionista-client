import React from 'react'

const FeaturesCard = ({ data }) => {
    const { image, name, description } = data
    return (
        <div
            className='lg:m-4 md:m-1 m-1 lg:p-5 md:p-6 p-3 
            flex flex-col items-center rounded-xl text-center cursor-pointer 
            hover:bg-white hover:shadow-lg'>
            <lord-icon
                src={image}
                trigger="hover"
                target="div"
                colors="outline:#121331,primary:#646e78,secondary:#6ECCAF"
                style={{ width: "100px", height: "100px" }}>
            </lord-icon>
            <h2 className='lg:text-xl md:text-2xl text-lg font-bold'>{name}</h2>
            <p className='text-center mt-1 lg:text-md md:text-md text-sm leading-[20px]'>{description}</p>
        </div>
    )
}

export default FeaturesCard