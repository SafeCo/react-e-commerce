import { motion, AnimatePresence } from "framer-motion"

import "./SearchSection.css"

function SearchSection({search, setSearch}) {

    return (


        <AnimatePresence>
                    {search &&
                        (<motion.div
                            className="searchSection__container"
                            key="searchSection1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                      
                            <div className="searchSection__input__container">
                                <div className="empty" ></div>
                                <div className="searchSection__input-container">
                                    <input className="searchSection__input" type="text" placeholder="Enter Search Keyword..."/>
                                </div>
                                <div className="searchSection__closeButton-container">
                                    <button 
                                        className="searchSection__closeButton"
                                        onClick={()=>setSearch(!search)}
                                    >
                                        <p>Close</p>
                                    </button>
                                </div>
                            </div>
                        </motion.div>)
                    }
                </AnimatePresence>
    )
}

export default SearchSection


{/* <div className="searchSection__container">
            <div className="searchSection__input__container">
                <div className="empty" ></div>
                <div className="searchSection__input-container">
                    <input className="searchSection__input" type="text" placeholder="Enter Search Keyword..."/>
                </div>
                <div className="searchSection__closeButton-container">
                    <button 
                        className="searchSection__closeButton"
                        onClick={()=>setSearch(!search)}
                    >
                        <p>Close</p>
                    </button>
                </div>
            </div>
            
        </div> */}