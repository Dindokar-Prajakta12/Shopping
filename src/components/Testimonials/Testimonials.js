import React from 'react';
import css from './Testimonial.module.css';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import Slider from "react-slick"; // Importing Slick Slider
import "slick-carousel/slick/slick.css"; // Slick Slider CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Slider Theme CSS

const Testimonials = () => {
    // Slick slider settings
    const settings = {
        dots: true, // Show dots navigation
        infinite: true, // Infinite loop
        speed: 500, // Animation speed
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll at once
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={css.Testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>

                <img src={Hero} alt='Testimonial Hero' />
                
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>
            
            <div className={css.reviews}>Reviews</div>
            
            <div className={css.carousel}>
                <Slider {...settings} className={css.tCarousel}>
                    {TestimonialsData.map((testimonial, i) => (
                        <div key={i}>
                            <div className={css.Testimonial}>
                                <img src={testimonial.image} alt={testimonial.name} />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;



























// import React from 'react'
// import css from './Testimonial.module.css'
// import Hero from '../../assets/testimonialHero.png'
// import Swiper from 'swiper'
// import { TestimonialsData } from '../../data/testimonials'
// import { SwiperSlide } from 'swiper/react'
// const Testimonials = () => {
//     return (
//         <div className={css.Testimonials}>
//             <div className={css.wrapper}>
//                 <div className={css.container}>
//                     <span>Top Rated</span>
//                     <span> Seedily say has suitable disposal and boy . Exercise joy man children rejoicted</span>
//                 </div>

//                 <img src={Hero} alt='' />
//                 <div className={css.container}>
//                     <span> 100k</span>
//                     <span>Happy Customers with us </span>
//                 </div>
//             </div>
//             <div className={css.reviews}> reviews</div>
//             <div className={css.carousel}>
//                 <Swiper
//                     slidesPerView={3}
//                     slidesPerGroup={1}
//                     spaceBetween={20}
//                     className={css.tCarousel}
//                 >
//                     {
//                         TestimonialsData.map((Testimonial, i) => {
//                             <SwiperSlide>
//                                 <div className={css.Testimonial}>
//                                     <img src={Testimonial.img} alt='' />
//                                     <span> {Testimonial.comment}</span>
//                                     <hr/>
//                                         <span> {Testimonial.name}</span>
                                    
//                                 </div>
//                             </SwiperSlide>
//                         })
//                     }
//                 </Swiper>
//             </div>

//         </div>
//     )
// }

// export default Testimonials
