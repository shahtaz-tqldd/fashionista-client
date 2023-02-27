import React from 'react'

const Subscribe = () => {
    return (
        <section className='lg:m-10 md:m-8 m-3 px-12 py-8 bg-[#181D31] rounded-xl jump' data-aos="fade-up">
            <div className='flex lg:flex-row flex-col gap-4 items-center'>
                <div className='lg:w-1/3'>
                    <lord-icon
                        target="section"
                        src="https://cdn.lordicon.com/qzwudxpy.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#ebe6ef,secondary:#d1fad7,tertiary:#f4a09c"
                        style={{ width: "300px", height: "300px" }}>
                    </lord-icon>
                </div>
                <div className='lg:w-2/3'>
                    <h1 className='text-5xl font-bold text-white'>Get <span className='text-[#FFDB89]'>20%</span> Off<br /> Discount Coupon</h1>
                    <h2 className='text-[24px] text-white mt-4'>by Subscribe our Newsletter</h2>
                    <div className='mt-10 flex'>
                        <input type="text" placeholder="Email Address" className="input input-bordered w-[270px] -mr-3 focus:outline-none" />
                        <button className='btn btn-primary text-white normal-case rounded-r-md rounded-l-none' >
                            Get the Coupon &nbsp;
                            <lord-icon
                                target="button"
                                src="https://cdn.lordicon.com/zmkotitn.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style={{ width: "20px", height: "20px" }}>
                            </lord-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe