import React from 'react'

const PrimaryButton = ({ children, eventHandler }) => {
    return (
        <button onClick={eventHandler} className='btn text-white normal-case px-8 rounded-md border-none' style={{backgroundColor:"#EC7272"}}>
            {children} &nbsp;
            <lord-icon
                target="button"
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: "20px", height: "20px" }}>
            </lord-icon>
        </button>
    )
}

export default PrimaryButton