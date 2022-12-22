import { useContext } from 'react';
import { MediaContext } from '../../context/MediaContext';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Card from "./Card"

function CardCarousel() {

    const { matches } = useContext(MediaContext)
    const { mobile } = useContext(MediaContext)
    return (
        <>
            <Swiper
                navigation={matches ? true : false} 
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={mobile? 3 : 1}
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