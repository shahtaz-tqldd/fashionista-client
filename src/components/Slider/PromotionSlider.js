import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import PromotionCard from "../Cards/PromotionCard";
import { useQuery } from "@tanstack/react-query";

export default function PromotionSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        cssEase: "linear"
    };
    const { data: promotions = [] } = useQuery({
        queryKey: ["promotions"],
        queryFn: async () => {
            const res = await fetch('https://fashionista-server.vercel.app/promotions');
            const data = res.json();
            return data
        }
    })
    return (
        <Slider {...settings}>
            {
                promotions?.map((item, index) => <PromotionCard key={index} data={item} />)
            }
        </Slider>
    );
}