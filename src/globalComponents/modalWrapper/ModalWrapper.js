import {useEffect, useState} from 'react'
import { motion } from 'framer-motion'

import './ModalWrapper.css'

import HamburgerMenu from '../../navBar/hamburgerMenu/HamburgerMenu'
import SideCart from '../../navBar/sideCart/SideCart'

//HOW TO USE:
// This component receives the following props children, modalState and modalSwitch
// Children is the component this component wraps arround
// modalState is the prop which is sent to this component to open and close
// modalSwitch is the prop function which activates to switch the modalState in the parent component

export default function ModalWrapper(props){

    const [modalChild, setModalChild]= useState("")
    useEffect(()=>{
        switch(props.componentName){
			case "hamburgerMenu":
				setModalChild(
					<HamburgerMenu
                        modalFlipSwitch={modalFlipSwitch}
                    />
				)
                break;
            case "sideCart":
                setModalChild(
                    <SideCart
                        modalFlipSwitch={modalFlipSwitch}
                    />
                )
                break;
			default :
				break;
		}
    },[])
	
    const modalFlipSwitch = ()=>{
        props.setModalOpen(!props.modalState)
    }

    const modalSetter = (modalState, scrollBarWidth)=>{
		if(window.matchMedia("(max-width: 480px)").matches && modalState === false ){
			document.body.style.paddingRight = "0px"
			document.body.classList.add("noMobileScroll")

		}else if(window.matchMedia("(max-width: 480px)").matches && modalState === true){
			document.body.style.paddingRight = "0px"
			document.body.classList.remove("noMobileScroll")

		}else if (modalState === true){
            document.body.style.paddingRight = scrollBarWidth + "px"
			document.body.style.overflow = 'hidden';

		}else{
			document.body.style.overflowY = 'scroll'
			document.body.style.paddingRight = "0px"

		}
	}
    
    useEffect(()=>{
        const scrollBarWidth = String(Math.round(window.innerWidth - document.body.clientWidth))
        modalSetter(props.modalState, scrollBarWidth)

        return()=>{
            modalSetter(!props.modalState, 0)
        }

    },[])


    return (
        <div className="modalWrapper__container">
            <div 
                className={ props.componentName === "sideCart"?
                    "modalWrapper__darkBg modal__sideCart" :
                    "modalWrapper__darkBg"
                    }
                onClick={(e)=>  {
                    if(e.currentTarget === e.target ){
                        modalSetter(!props.modalState);
                        modalFlipSwitch();
                        } else if (e.target.name === "cancelModal"){
                            modalSetter(!props.modalState);
                            modalFlipSwitch();
                        }
                    } 
                }
            >
            {modalChild}
            </div>
        </div>
    )
}