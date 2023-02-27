import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from '../../../components/Cards/TestimonialCard'

const Testimonial = () => {
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    const testimonialData = [
        {
            id: 1,
            review: "The website has a modern and stylish design that reflects the fashion-forward ethos of the brand. The site is well-organized, with clear and easy-to-find menus.",
            reviewer: "Rahman Selim",
            reviewerPhoto: "https://uclic.ucl.ac.uk/thumbs/people/james-hardwick/james-thegem-person-350x350-q100.jpg"
        },
        {
            id: 2,
            review: "Fashionista has a user-friendly interface, making it easy to search for products and filter search results based on different criteria such as price, size, and color.",
            reviewer: "Masha Afroz",
            reviewerPhoto: "https://th.bing.com/th/id/OIP.IajO7RtGoQZ-7CD-A572SwHaGu?pid=ImgDet&w=551&h=500&rs=1"
        },
        {
            id: 3,
            review: "The website has an extensive range of products, including clothing, accessories, beauty, and footwear, catering to a wide range of styles and preferences.",
            reviewer: "Sheikh Naser Selim",
            reviewerPhoto: "https://th.bing.com/th/id/R.ae3b95e4ce25b4c91afe7287b90cf8a8?rik=LsWhxlMYZjgJhg&pid=ImgRaw&r=0"
        },
        {
            id: 4,
            review: "Product pages contain detailed information about the products, including high-quality images, size and fit guides, materials and care instructions, and customer reviews.",
            reviewer: "Shabab Rahman Azim",
            reviewerPhoto: "https://upload.wikimedia.org/wikipedia/commons/2/23/Photo_portrait_PP.jpg"
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex flex-col items-center mb-8'>
                <lord-icon
                    src="https://cdn.lordicon.com/itmsnfur.json"
                    trigger="loop"
                    style={{ width: "120px", height: "120px" }}>
                </lord-icon>
                <h2 className='font-bold text-2xl text-gradient'>From Our Happy Customer</h2>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        testimonialData.map((item, index) => <TestimonialCard key={index} data={item} />)
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Testimonial