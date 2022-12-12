import { motion } from 'framer-motion';
import "./NavList.css"


function NavList() {

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
        <ul className="navList__container">
            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"                        
            >
                <button>
                    Clothes
                </button>
            </motion.li>

            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"
            >
                <button>
                    Technology
                </button>
            </motion.li>

            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"
            >
                <button>
                    Jewelry
                </button>
            </motion.li>

            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"
            >
                <button>
                    Essentials
                </button>
            </motion.li>
            
            <motion.li 
            className="navList__item"
            variants={itemVariant}
            initial="hidden"
            whileHover="visible"
            >
                <button>
                    Sale
                </button>
            </motion.li>
        </ul>
    )
}

export default NavList