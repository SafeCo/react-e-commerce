import { motion, AnimatePresence } from "framer-motion"

import "./SearchSection.css"

function SearchSection({search, setSearch, matches}) {

    
    return (
        <AnimatePresence>
                    {search &&
                        (<motion.div
                            className="sS__container"
                            key="searchSection1"
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                        >
                            <div className="sS__box">
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
                            </div>
                        </motion.div>)
                    }
                </AnimatePresence>
    )
}

export default SearchSection
