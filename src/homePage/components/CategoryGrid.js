

import "./CategoryGrid.css"

import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"
import televisionImage from "../../globalImages/television.jpg"
import essentialsImage from "../../globalImages/essentials.jpg"
import saleImage from "../../globalImages/watch.jpg"

function CategoryGrid() {
    return (
        <div className="cG__container" >
            <img className="image-grid-col-2" src={fashionImage} alt="fashion image" />
            <img src={jewelryImage} alt="jewelry image" />
            <img src={phoneImage} alt="phone image" />
            <img src={televisionImage} alt="tv image" />
            <img src={essentialsImage} alt="essentials image" />
            <img src={saleImage} alt="sale image" />

        </div>
    )
}

export default CategoryGrid