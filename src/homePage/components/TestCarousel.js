// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./CategoryBanner.css"

//Import Images
import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"

// Import Swiper styles
import 'swiper/css';

function TestCarousel() {
  
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="cB__card-container" >
            <div className="cB__image-container">
                <img className="cB__image" src={fashionImage} />
            </div>
            <div className="cB__card__title-container">
                <p>Fashion</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    )
}

export default TestCarousel