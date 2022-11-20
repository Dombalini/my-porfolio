import React from "react";
import "../styles/Main.scss";
import { CgArrowLongDownC } from "react-icons/cg";
const Main = () => {
    return (
        <>
            <div className="wrapper">
                <div className="left-side">Junior Front End developer</div>

                <div className="main-container">
                    <div className="main-container-title">Dominik Zovko</div>
                </div>
                <div className="right-side">
                    Scroll <br /> Down
                    <div className="icon">
                        <CgArrowLongDownC className="icon-size" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
