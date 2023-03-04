import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import PromotionCard from "../Cards/PromotionCard";
const content = [
    {
        "name": "Black Dress",
        "off": 40,
        "bg": "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    },
    {
        "name": "Green t-shirt",
        "off": 25,
        "bg": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        "name": "Women Cloth",
        "off": 50,
        "bg": "https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    },
]
export default function PromotionSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            {
                content.map((item, index) => <PromotionCard key={index} data={item} />)
            }
        </Slider>
    );
}