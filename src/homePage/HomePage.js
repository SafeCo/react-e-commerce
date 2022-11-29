import React from 'react'
import "./HomePage.css"
import reeds from "./images/reeds.jpg"

function HomePage() {
  return (
    <div className="hP__container">
        <div className="hP__heroImage-container">
            <img className="hP__heroImage" src={reeds}/>
            <div className="hP__heroImage__buttons-container">
              <button className="hP__heroImage__button">
                <p>SHOP MENS</p>
              </button>
              <button className="hP__heroImage__button">
                <p>SHOP WOMENS</p>
              </button>
            </div>
        </div>
        <main className="hP__main-container">
          <div className="hP__main-title">
              <p>Our best sellers</p>
          </div>
          <div className="hP__main-images">
            <div className="hP__main-image">
              
            </div>
            <div className="hP__main-image">
              
            </div>
            <div className="hP__main-image">
              
            </div>
          </div>

        </main>




    </div>
  )
}

export default HomePage