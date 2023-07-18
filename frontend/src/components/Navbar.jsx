import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiRocketThruster} from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"



function Navbar () {
   const [click, setClick] = useState(false)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setClick(false)

   
    return ( 
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <GiRocketThruster 
                    className="navbar-icon"
                    onClick= {closeMobileMenu}
                    />
                    Clubs
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars /> }
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;