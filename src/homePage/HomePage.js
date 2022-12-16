import {motion } from "framer-motion"
import { useOutletContext } from "react-router-dom"

import Card from './components/Card'
import Footer from "../globalComponents/footer/Footer"
import "./HomePage.css"
import reeds from "../globalImages/reeds.jpg"
import CategoryCarousel from "./components/CategoryCarousel"

function HomePage() {


  const {navHeight} = useOutletContext()
  
  const navBarHeight = {
    height: navHeight? window.innerHeight - navHeight : window.innerHeight - 77
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
            <motion.div 
              className="hP__heroImage__text-container"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.5}}
            >
              <p className="hP__heroImage__text">Simple.</p>
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
            </motion.div>
            
        </div>
        <main className="hP__main-container">
          <div>
            <CategoryCarousel/>
          </div>
          
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