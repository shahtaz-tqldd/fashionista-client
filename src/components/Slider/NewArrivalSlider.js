import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import NewArrivalCard from "../Cards/NewArrivalCard";
import { useQuery } from "@tanstack/react-query";

export default function NewArrivalSlider() {
    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch('https://fashionista-server.vercel.app/new-arival');
            const data = res.json();
            return data
        }
    })
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        vertical: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    vertical: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    vertical: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                }
            }
        ]
    };
    return (
        <div className='lg:w-1/3 lg:h-[480px]'>
            <div className='mb-3'>
                <span className='bg-gradient text-white text-xs px-6 py-[5px] rounded-full'>New Arival</span>
            </div>
            <Slider {...settings}>
                {
                    products?.map((item, index) => <NewArrivalCard key={index} data={item} />)
                }
            </Slider>
        </div>
    );
}