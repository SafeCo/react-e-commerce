import {motion } from "framer-motion"
import { useOutletContext } from "react-router-dom"

import Card from './components/Card'
import Footer from "../globalComponents/footer/Footer"
import "./HomePage.css"
import reeds from "../globalImages/reeds.jpg"
import CategoryBanner from "./components/CategoryBanner"
import TestCarousel from "./components/TestCarousel"

function HomePage() {

  const {navHeight} = useOutletContext()
  const navBarHeight = {
    height: navHeight? window.innerHeight - navHeight : window.innerHeight - 64
  }

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
        <div className="hP__heroImage-container" style={navBarHeight}>
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
          <CategoryBanner/>

          
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
        <TestCarousel/>
    </div>
  )
}

export default HomePage