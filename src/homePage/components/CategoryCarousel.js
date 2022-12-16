// Import Swiper React components
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./CategoryCarousel.css"
import { MediaContext } from '../../context/MediaContext';



//Import Images
import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"
import televisionImage from "../../globalImages/television.jpg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect } from 'react';


function CategoryCarousel() {

    const { matches } = useContext(MediaContext)

    return (
        <>
            <div className="cC__title-container">
                <p>Shop by category</p>
            </div>
            
            <Swiper
                navigation={true} 
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={matches? 4 : 3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="cC__card-container" >
                        <div className="cC__image-container">
                            <img className="cC__image" src={fashionImage} />
                        </div>
                        <div className="cC__card__title-container">
                            <p>Fashion</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="cC__card-container" >
                        <div className="cC__image-container">
                            <img className="cC__image" src={jewelryImage} />
                        </div>
                        <div className="cC__card__title-container">
                            <p>Jewelry</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cC__card-container" >
                        <div className="cC__image-container">
                            <img className="cC__image" src={phoneImage} />
                        </div>
                        <div className="cC__card__title-container">
                            <p>Technology</p>
                        </div>
                    </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className="cC__card-container" >
                    <div className="cC__image-container">
                        <img className="cC__image" src={televisionImage} />
                    </div>
                    <div className="cC__card__title-container">
                        <p>TV's</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    )
}

export default CategoryCarousel