import "./CategoryBanner.css"
import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"

function CatergoryBanner() {
    return (
        <div className="cB__container" >
            <div className="cB__title-container">
                <p>Shop by category</p>
            </div>
            
            <div className="cB__cards__container" >
                <div className="cB__card-container" >
                    <div className="cB__image-container">
                        <img className="cB__image" src={fashionImage} />
                    </div>
                    <div className="cB__card__title-container">
                        <p>Fashion</p>
                    </div>
                </div>

                <div className="cB__card-container" >
                    <div className="cB__image-container">
                        <img className="cB__image" src={jewelryImage} />
                    </div>
                    <div className="cB__card__title-container">
                        <p>Jewelry</p>
                    </div>
                </div>

                <div className="cB__card-container" >
                    <div className="cB__image-container">
                        <img className="cB__image" src={phoneImage} />
                    </div>
                    <div className="cB__card__title-container">
                        <p>Technology</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CatergoryBanner