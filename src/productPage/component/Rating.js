import "./Rating.css"
import Stars from "./Stars"

function Rating({rating}) {
    const newValue = rating*20
    const newPercent = newValue.toString() + "%"

    const style ={
        width: newPercent
    }

    return (
        <div className="rating__container">
            <div className="rating__stars-container">
                <div className="rating__goldStars-container" style={style}>
                    <Stars/>
                </div>
                <div className="rating__greyStars-container">
                    <Stars/>
                </div>
            </div>
            
        </div>
    )
}

export default Rating