import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Card from "./Card"

function CardCarousel() {
    return (
        <>
            <Swiper
                navigation={true} 
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={ 3}
            >
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CardCarousel