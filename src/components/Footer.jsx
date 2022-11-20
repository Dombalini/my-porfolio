import React from "react";
import "../styles/Footer.scss";
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImMail } from "react-icons/im";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-left">
                    <div>
                        <a href="https://www.instagram.com/dombalini/">
                            <ImInstagram />
                            <div>Instagram</div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/dominik.zovko.37">
                            <ImFacebook2 />
                            <div> Facebook</div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Dombalini">
                            <ImGithub />
                            <div>GitHub</div>
                        </a>
                    </div>
                    <Link to="contact">
                        <ImMail />
                        <div>dentechdominik@gmail.com</div>
                    </Link>
                </div>
                <div className="footer-right">
                    Hope you got to here, if u see me as a fit <br /> for your
                    firm please contact me!
                </div>
                <div className="arrow-up">
                    <ScrollToTop />
                </div>
            </div>
        </>
    );
};

export default Footer;
