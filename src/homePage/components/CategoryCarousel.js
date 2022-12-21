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
import essentialsImage from "../../globalImages/essentials.jpg"
import saleImage from "../../globalImages/watch.jpg"
import homeImage from "../../globalImages/home.jpg"
import healthImage from "../../globalImages/health.jpg"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";


function CategoryCarousel() {

    const { matches } = useContext(MediaContext)
    const { mobile } = useContext(MediaContext)

    return (
        <>
            <div className="hP__title-container">
                <p>Shop by category</p>
            </div>            
            <Swiper
                navigation={true} 
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={matches? 5 : mobile? 4 : 3}
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
            <SwiperSlide>
                <div className="cC__card-container" >
                    <div className="cC__image-container">
                        <img className="cC__image" src={essentialsImage} />
                    </div>
                    <div className="cC__card__title-container">
                        <p>Essentials</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cC__card-container" >
                    <div className="cC__image-container">
                        <img className="cC__image" src={saleImage} />
                    </div>
                    <div className="cC__card__title-container">
                        <p>Sale</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cC__card-container" >
                    <div className="cC__image-container">
                        <img className="cC__image" src={homeImage} />
                    </div>
                    <div className="cC__card__title-container">
                        <p>Home</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cC__card-container" >
                    <div className="cC__image-container">
                        <img className="cC__image" src={healthImage} />
                    </div>
                    <div className="cC__card__title-container">
                        <p>Health</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    )
}

export default CategoryCarousel