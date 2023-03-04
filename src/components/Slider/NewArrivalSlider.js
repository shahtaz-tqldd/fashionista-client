import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import NewArrivalCard from "../Cards/NewArrivalCard";
const content = [
    {
        "name": "Red t-shirt",
        "image": "https://freepngimg.com/thumb/tshirt/7-2-t-shirt-png-hd.png",
        "bg": "#F0997D",
        "price": 200,
    },
    {
        "name": "Black Dress",
        "image": "https://th.bing.com/th/id/R.77a9e3bbf42520dbefedab2e3d197dde?rik=D9zdql879wR%2fqw&pid=ImgRaw&r=0",
        "bg": "#F7E2D6",
        "price": 350,
    },
    {
        "name": "Green t-shirt",
        "image": "https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png",
        "bg": "#D7E9B9",
        "price": 250,
    },
    {
        "name": "Gray t-shirt",
        "image": "https://i0.wp.com/miamiepictees.net/wp-content/uploads/2016/04/preview_men_standard_front-1.png?fit=240%2C264&ssl=1",
        "bg": "#FFE7CC",
        "price": 200,
    },
    {
        "name": "Women Cloth",
        "image": "https://th.bing.com/th/id/R.e240f314159bd306a050dd19b2532ff3?rik=YZQf9yrabvd9gg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdress-png--1300.png&ehk=nGSQoU%2bMIHQtMo4kJlTNjtxrJ8jeh6a1EbwVlprKNZ0%3d&risl=&pid=ImgRaw&r=0",
        "bg": "#CEE5D0",
        "price": 1300,
    },
]
export default function NewArrivalSlider() {
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
                    content?.map((item, index) => <NewArrivalCard key={index} data={item} />)
                }
            </Slider>
        </div>
    );
}