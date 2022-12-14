import { motion, AnimatePresence } from "framer-motion"

import "./SearchSection.css"

function SearchSection({search, setSearch, matches}) {

    const containerVariant ={
        hidden:{
            height: 0,
            transition: {
                duration: 0.2
            }

        },
        visible:{
            height: "auto",
            transition: {
                when:"beforeChildren",
                duration: 0.2
            }
        },
        exit:{
            height: 0,
            transition: {
                when:"afterChildren",
                duration: 0.5
            }
        }
    }


    const boxVariant={
        hidden:{
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }

    }
    
    return (
        <AnimatePresence>
                    {search &&
                        (<motion.div
                            className="sS__container"
                            key="sS__container"
                            variants={containerVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.div 
                                className="sS__box"
                                key="sS__box"
                                variants={boxVariant}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className="sS__input__container">
                                    <div className="sS__input-container">
                                        <input className="sS__input" type="text" placeholder="Enter Search Keyword..."/>
                                    </div>
                                    <div className="sS__closeButton-container">
                                        <button 
                                            className="sS__closeButton"
                                            onClick={()=>setSearch(!search)}
                                        >
                                            <p>Close</p>
                                        </button>
                                    </div>
                                </div>
                                <main className="sS__suggestions">
                                    <div className="sS__terms__container">
                                        <div>
                                            <h3>Top Search Terms</h3>
                                            <ul className="sS__terms">
                                                <li>T-shirt</li>
                                                <li>phone</li>
                                                <li>jewelry</li>
                                                <li>Computer</li>
                                                <li>item</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <div className="sS__products__container" >
                                        <div className="sS__product-container">
                                            <div className="sS__image-container">
                                                <img className="sS__image"   src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                            </div>
                                            <p>A simple bag</p>
                                        </div>

                                        <div className="sS__product-container">
                                            <div className="sS__image-container">
                                                <img className="sS__image"   src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                            </div>
                                            <p>A simple bag</p>
                                        </div>

                                        <div className="sS__product-container">
                                            <div className="sS__image-container">
                                                <img className="sS__image"   src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                            </div>
                                            <p>A simple bag</p>
                                        </div>
                                    </div>
                                </main>
                            </motion.div>
                        </motion.div>)
                    }
                </AnimatePresence>
    )
}

export default SearchSection
