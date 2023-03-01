import React, { useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);
    return (
        <div>
            {isVisible && (
                <button onClick={handleTop} className={`fixed bottom-10 right-10 lg:block hidden`}>
                    <lord-icon
                        src="https://cdn.lordicon.com/xdakhdsq.json"
                        trigger="hover"
                        colors="primary:#219f94"
                        style={{ width: "40px", height: "40px" }}>
                    </lord-icon>
                </button>)
            }
        </div>
    )
}

export default ScrollToTop