import { useEffect } from "react"
import "./Rating.css"

function Rating({rating}) {
    useEffect(()=>{
        const ratingVar = (rating * 2).toFixed(1) / 10
        document.documentElement.style.setProperty("--rating", ratingVar)
    },[])

    return (
        <div className="rating__container">
            <div className="stars" >
                <div className="bg">⭐⭐⭐⭐⭐</div>
            </div>
        </div>
    )
}

export default Rating



