import "./HamburgerMenu.css";

function HamburgerMenu({openHamburgerMenu, setOpenHamburgerMenu}) {

    const closeModal = (e)=>{
        if(e.currentTarget === e.target){
            setOpenHamburgerMenu(!openHamburgerMenu)
        }else{
            return
        }
    }

    return (
        <div className="hM__container"
            onClick={(e)=>{closeModal(e)}}
        >

        </div>
    )
}

export default HamburgerMenu