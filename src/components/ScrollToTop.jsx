import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowScrollToTopButton(true);
            } else {
                setShowScrollToTopButton(false);
            }
        });
    }, []);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showScrollToTopButton && (
                <FaAngleDoubleUp className="arrow-up" onClick={scrollTop} />
            )}
        </>
    );
};
export default ScrollToTop;
