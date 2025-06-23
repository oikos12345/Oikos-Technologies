import { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/about.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">

            <div
                id="hamburger"
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>  

            <Link to="/">
                <img src='/src/assets/media/OIKOS NO BG.png' />
            </Link>

            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/about">ABOUT US</Link>
                <Link to="/services">OUR SERVICES</Link>
                <Link to="/careers">CAREERS</Link>
                <Link to="/contact">CONTACTS</Link>
            </div>
        </header>
    );
};

export default Header;