import "./NavList.css"
import NavListItem from './NavListItem';


function NavList() {
    const navListItems = ["Clothes","Technology","Jewelry", "Essentials", "Sale" ]

    return (
        <div className="navList__container">
        <ul className="navList__box">
            {
                navListItems.map((name)=>{
                    return <NavListItem key={name} item={name} />
                })
            }
        </ul>
        </div>
    )
}

export default NavList