import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import "./Accordion.css"

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const contentVariant={
        hidden:{
            height: 0
        },
        visible:{
            height: "auto"
        }
    }

    return (
        <div>
            <div className="accordion__list-title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <button 
                    className="accordion__list-button"
                >
                    <div>{isActive ? '-' : '+'}</div>
                </button>
            </div>
            <AnimatePresence>
                {isActive && 
                    <motion.div
                    className="accordion__list-containter"
                    key="content"
                    variants={contentVariant}
                    initial="hidden"
                    animate="visible"
                    exit={{height: 0}}
                    
                    >
                    {content}
                    </motion.div>
                } 
            </AnimatePresence>
            
        </div>
    );
};

export default Accordion;