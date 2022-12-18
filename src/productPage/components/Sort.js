import { useState } from "react"
import "./Sort.css"

function Sort({sortFilter, setSortFilter}) {

    const filterList = ["Price: Low to High", "Price: High to Low", "Highest Rated"]

    const filteredList= filterList.filter((list)=>{
        if (list != sortFilter){
            return list
        }
    })

   

    // ⮝
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
                        <div>⮟</div>
                    </div>
                </div>
            <div className="sort__box">
                { isActive &&
                    filteredList.map((list)=>{
                        return(
                            <div 
                                className="sort__filter__container"
                                onClick={()=>{
                                    setSortFilter({list})
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