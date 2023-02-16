import React from 'react'

const CategoryCard = ({ data }) => {
    const { image, name, description } = data
    return (
        <div className='m-4 flex flex-col items-center'>
            <lord-icon
                src={image}
                trigger="loop"
                style={{ width: "100px", height: "100px" }}>
            </lord-icon>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-center'>{ description}</p>
        </div>
    )
}

export default CategoryCard