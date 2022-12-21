import "./CategoryGrid.css"

import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"
import televisionImage from "../../globalImages/television.jpg"
import essentialsImage from "../../globalImages/essentials.jpg"
import saleImage from "../../globalImages/watch.jpg"
import homeImage from "../../globalImages/home.jpg"
import healthImage from "../../globalImages/health.jpg"

function CategoryGrid() {
    return (
        <div className="cG__container" >

            <div className="image-container image-grid-col-2 image-grid-row-2">
                <img src={fashionImage} alt="fashion image" />
                <p>Fashion</p>
            </div>

            <div className="image-container">
                <img src={jewelryImage} alt="jewelry image" />
                <p>Jewelry</p>
            </div>

            <div className="image-container">
                <img src={phoneImage} alt="phone image" />
                <p>Technology</p>
            </div>

            <div className="image-container image-grid-col-2 ">
                <img src={televisionImage} alt="tv image" />
                <p>TV's</p>
            </div>

            <div className="image-container">
                <img src={essentialsImage} alt="essentials image" />
                <p>Essentials</p>
            </div>

            <div className="image-container">
                <img src={saleImage} alt="sale image" />
                <p>Sale</p>
            </div>

            <div className="image-container">
                <img src={homeImage} alt="home image" />
                <p>Home</p>
            </div>

            <div className="image-container">
                <img src={healthImage} alt="health image" />
                <p>Health</p>
            </div>

        </div>
    )
}

export default CategoryGrid