import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
    return (
        <>
            <div className="header-container">
                <Link className="header-nav" to="/">
                    Home
                </Link>
                <Link className="header-nav" to="/about">
                    About
                </Link>
                <Link className="header-nav" to="/projects">
                    Projects
                </Link>
                <Link className="header-nav" to="/contact">
                    Contact
                </Link>
            </div>
        </>
    );
};

 export default Header;
