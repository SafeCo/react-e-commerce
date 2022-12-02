import {motion, } from "framer-motion"

import Card from './components/Card'
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

        <footer className="hP__footer-container" >
          <div className="hP__footer__firstCol">
            <div>Logo</div>
            <div>email</div>
            <div>Socials</div>
          </div>

          <div className="hP__footer__secondCol">
            <div>shop try list</div>
            <div>Shop bags</div>
            <div>Shop eyewear</div>
            <div>Shop jewelery</div>
            <div>Shop jewelery</div>
          </div>

          <div className="hP__footer__thirdCol">
            <div>customer service</div>
            <div>conat</div>
            <div>Socials</div>
          </div>






        </footer>
    </div>
  )
}

export default HomePage