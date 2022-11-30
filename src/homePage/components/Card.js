import {useState} from 'react'
import "./Card.css"

function Card() {

    const [isHovering, setIsHovering]= useState(false)

    const showButton = (cond)=>{
        setIsHovering(!isHovering)
    }

    return (
        <div className="card__container">
            <div className="card__outline">
                <div  
                onMouseEnter={()=>{showButton()}} 
                onMouseLeave={()=>{showButton()}}
                className="card__image-container"
                >
                {
                    isHovering && <div className="card__darkBg">Test</div>

                }
                    <img className="card__image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </div>
            <p>Hello</p>
            </div>
        </div>
    )
}

export default Card