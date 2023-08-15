import logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react"

const NavBar = () => {

    const navReference = useRef();

    const displayNavBar = () => {
        navReference.current.classList.toggle("responsive_navBar");
    }

    return (
        <header>
            <img src={logo} alt="Main logo" className="logo-img" />
            <nav ref={navReference}>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
                <button className="menu-btn nav-close-btn" onClick={displayNavBar} >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </nav>
            <button className="menu-btn nav-open-btn" onClick={displayNavBar} >
                    <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    );
}

export default NavBar;