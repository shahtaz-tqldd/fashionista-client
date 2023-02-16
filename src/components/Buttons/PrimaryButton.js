import React from 'react'

const PrimaryButton = ({ children }) => {
    return (
        <button className='btn btn-primary text-white normal-case px-8 rounded-md'>
            {children} &nbsp;
            <lord-icon
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: "20px", height: "20px" }}>
            </lord-icon>
        </button>
    )
}

export default PrimaryButton