import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../../public/instructor/1.jpg'
import slide2 from '../../../../public/instructor/2.jpg'
import slide3 from '../../../../public/instructor/3.jpg'
import slide4 from '../../../../public/instructor/4.jpg'
import slide5 from '../../../../public/instructor/5.jpg'
import slide6 from '../../../../public/instructor/6.jpg'

const PopularInstructors = () => {
    return (
        <section className="mt-20">
            <h2 className='text-4xl my-16 font-bold text-center'>Our Popular Instructors</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className="w-full" src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">John Smith</h3>
                    <p className="text-white text-center">Students: 66</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">Emily Johnson</h3>
                    <p className="text-white text-center">Students: 76</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">Sarah Thompson</h3>
                    <p className="text-white text-center">Students: 57</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">Deba</h3>
                    <p className="text-white text-center">Students: 38</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">Seja</h3>
                    <p className="text-white text-center">Students: 49</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-20 text-white">Reja</h3>
                    <p className="text-white text-center">Students: 84</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default PopularInstructors;