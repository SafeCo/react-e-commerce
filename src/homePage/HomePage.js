import React from 'react'
import Card from './components/Card'
import "./HomePage.css"
import reeds from "./images/reeds.jpg"

function HomePage() {
  return (
    <div className="hP__container">
        <div className="hP__heroImage-container">
            <img className="hP__heroImage" src={reeds}/>
            <div className="hP__heroImage__text-container">
              <p className="hP__heroImage__text">Simple elegance </p>
              <div >
                <button className="hP__heroImage__button">
                  <p>SHOP MENS</p>
                </button>
                <button className="hP__heroImage__button">
                  <p>SHOP WOMENS</p>
                </button>
              </div>
            </div>
            
        </div>
        <main className="hP__main-container">
          <div className="hP__main-title">
              <p>Our best sellers</p>
          </div>

          <div className="hP__main-cards-container">
            <Card/>
            <Card/>
            <Card/>
          </div>

        </main>

        <footer style={{height:200}}>
      {/* creating space for now */}
        </footer>
    </div>
  )
}

export default HomePage