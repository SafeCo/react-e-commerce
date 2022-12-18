import { useState } from "react"
import { motion } from "framer-motion"
import "./Sort.css"

function Sort({sortFilter, setSortFilter}) {

    const filterList = ["Price: Low to High", "Price: High to Low", "Highest Rated"]

    const filteredList= filterList.filter((list)=>{
        if (list !== sortFilter){
            return list
        }else{
            return
        }
    })



    const [isActive, setIsActive] = useState(false)
    
    return (
        <div className="sort__container">
            <div 
                className="sort__filter__container"
                onClick={()=>{
                    setIsActive(!isActive)
                }}
            >
                <p className="sort__sortBy">Sort By</p>
                <div className="sort__filter-container">
                    <p>{sortFilter}</p>

                    <motion.div
                        initial={{rotate: 0}}
                        animate={isActive? {rotate: -180} : {rotate: 0}}
                    >⮟</motion.div>
                </div>
            </div>
            <div className="sort__box">
                { isActive &&
                    filteredList.map((list, index)=>{
                        return(
                            <div 
                                key={index}
                                className="sort__filter__container"
                                onClick={()=>{
                                    setSortFilter(list)
                                    setIsActive(!isActive)
                                }}
                            >
                                <div className="sort__filter-container">
                                    <p>{list}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sort