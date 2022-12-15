import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <div className="footer__list-title" onClick={() => setIsActive(!isActive)}>
                <h4>{title}</h4>
                <button 
                    className="footer__list-button"
                >
                    <div>{isActive ? '-' : '+'}</div>
                </button>
            </div>
            {isActive && 
                <>{content}</>
            }
        </div>
    );
};

export default Accordion;