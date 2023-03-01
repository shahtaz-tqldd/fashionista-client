import React, { useState } from 'react'
import useTitle from '../../hooks/useTitle'

const StoreLocation = () => {
    useTitle("Stores")
    const [selectedTab, setSelectedTab] = useState(1)
    const storesData = [
        {
            name: "Maxima Tower",
            location: "Gulshan, Dhaka, Bangladesh",
            shop: "Fourth Floor, Shop No: 32 B",
            img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg",
            mapImg: "https://i.stack.imgur.com/B6fEt.png",
            phone: "+8801712345678",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
        {
            name: "Bashundhara City",
            location: "Panthapath, Dhaka, Bangladesh",
            shop: "Third Floor, Shop No: 86/2 A",
            img: "https://thumbs.dreamstime.com/b/women-s-clothing-store-22858928.jpg",
            mapImg: "https://joomly.net/frontend/web/images/googlemap/map.png",
            phone: "+8801712345678",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
        {
            name: "SK Tower Shopping Complex",
            location: "Dhanmondi, Dhaka, Bangladesh",
            shop: "Fifth Floor, Shop No: 24 C",
            img: "https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-august-inside-mango-man-store-galeria-shopping-center-clothing-design-manufacturing-105145770.jpg",
            mapImg: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1",
            phone: "+8801712345678",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
    ]
    return (
        <section className='flex lg:gap-16 gap-8 lg:flex-row flex-col'>

            <div className='lg:w-1/3'>
                {/* SIDE MENU */}
                <div className="sticky top-28 flex lg:flex-col flex-row lg:gap-10 gap-3 text-[#bbb]">
                    {
                        storesData?.map((item, index) => <div onClick={() => { setSelectedTab(index + 1); window.scrollTo({ top: 0, behavior:"smooth" }) }} className={`cursor-pointer ${selectedTab === index + 1 && "text-[#16c79e] "}`}>
                            <span className='flex items-start gap-1'>
                                <lord-icon
                                    target="span"
                                    src="https://cdn.lordicon.com/fihkmkwt.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#16c79e"
                                    style={{ width: "30px", height: "30px" }}>
                                </lord-icon>
                                <div>
                                    <h2 className='font-bold'>{item.name}</h2>
                                    <p className=''>{item.location}</p>
                                </div>
                            </span>
                        </div>)
                    }
                </div>
            </div>

            <div className='lg:w-2/3'>
                {
                    storesData?.map((item, index) => selectedTab === (index + 1) &&
                        <div>
                            <img src={item.img} alt="" className='h-[300px] w-[500px] object-cover' />
                            <h1 className='mt-6 text-3xl font-bold'>{item.name}</h1>
                            <p className='mt-2'>{item.location}</p>

                            <div className='mt-10 flex flex-wrap gap-5'>
                                <div className='p-5 rounded-lg bg-white hover:shadow-lg w-[200px] flex flex-col gap-2'>
                                    <lord-icon
                                        target="div"
                                        src="https://cdn.lordicon.com/slduhdil.json"
                                        trigger="hover"
                                        colors="primary:#16c79e"
                                        style={{ width: "35px", height: "35px" }}>
                                    </lord-icon>
                                    {item.shop}
                                </div>
                                <div className='p-5 rounded-lg bg-white hover:shadow-lg w-[200px] flex flex-col gap-2'>
                                    <lord-icon
                                        target="div"
                                        src="https://cdn.lordicon.com/tftaqjwp.json"
                                        trigger="hover"
                                        colors="primary:#16c79e"
                                        style={{ width: "35px", height: "35px" }}>
                                    </lord-icon>
                                    {item.phone}
                                </div>
                                <div className='p-5 rounded-lg bg-white hover:shadow-lg w-[200px] flex flex-col gap-2'>
                                    <lord-icon
                                        target="div"
                                        src="https://cdn.lordicon.com/qmuwmmnl.json"
                                        trigger="hover"
                                        colors="primary:#16c79e"
                                        style={{ width: "35px", height: "35px" }}>
                                    </lord-icon>
                                    {item.duration}
                                </div>
                                <div className='p-5 rounded-lg bg-white hover:shadow-lg w-[200px] flex flex-col gap-2'>
                                    <lord-icon
                                        target="div"
                                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                                        trigger="hover"
                                        colors="primary:#16c79e"
                                        style={{ width: "35px", height: "35px" }}>
                                    </lord-icon>
                                    {item.onDay}
                                </div>
                            </div>

                            <div className='mt-12'>
                                <img src={item.mapImg} alt="" className='w-full h-80 object-cover' />
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default StoreLocation