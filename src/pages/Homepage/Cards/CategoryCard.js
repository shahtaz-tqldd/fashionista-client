import React from 'react'

const CategoryCard = ({ data }) => {
    const { image, name, description } = data
    return (
        <div className='m-4 flex flex-col items-center hover:bg-white hover:shadow-lg p-5 rounded-xl text-center cursor-pointer'>
            <lord-icon
                src={image}
                trigger="hover"
                target="div"
                colors="outline:#121331,primary:#646e78,secondary:#86C8BC"
                style={{ width: "100px", height: "100px" }}>
            </lord-icon>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-center mt-1 leading-[20px]'>{ description}</p>
        </div>
    )
}

export default CategoryCard