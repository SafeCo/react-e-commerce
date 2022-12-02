import {motion, } from "framer-motion"

import Card from './components/Card'
import Footer from "./components/Footer"
import "./HomePage.css"
import reeds from "./images/reeds.jpg"

function HomePage() {
  const buttonVariant= {
    visible : {
        scale: 1.1,
        backgroundColor: "#000000",
        color: "#FFFFFF",
        transition: {
            duration: 0.2, 
        }
    },
  }

  return (
    <div className="hP__container">
        <div className="hP__heroImage-container">
            <img className="hP__heroImage" src={reeds}/>
            <div className="hP__heroImage__text-container">
              <p className="hP__heroImage__text">Simple elegance </p>
              <div >
                <motion.button 
                className="hP__heroImage__button"
                variants={buttonVariant}
                whileHover="visible"
                >
                  <p>SHOP MENS</p>
                </motion.button>
                <motion.button 
                className="hP__heroImage__button"
                variants={buttonVariant}
                whileHover="visible"
                >
                  <p>SHOP WOMENS</p>
                </motion.button>
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
        <Footer/>
    </div>
  )
}

export default HomePage