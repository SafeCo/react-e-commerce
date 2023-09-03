import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function NavListItem({item}) {
    const itemVariant= {
        hidden: {
            borderBottom: "solid #FFFFFF 2px",
            
        },

        visible: {
            borderBottom: "solid #000000 2px",
            transition:{
                duration: 0.2
            }
        }
    }

    return (
        <Link to={"products"} style={{textDecoration: "none", color: "none"}}>
            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"                        
            >
                <button>
                    {item}
                </button>
            </motion.li>
        </Link>
    )
}
