import React from "react";
import "../styles/Info.scss";
import { SiPokemon } from "react-icons/si";
import { CgPokemon } from "react-icons/cg";
const Info = () => {
    return (
        <>
            <div className="pokemon-left">
                <SiPokemon />
                <CgPokemon />
            </div>

            <div className="info-container">
                <div className="info-container-title">About</div>
                <div className="info-container-text">
                    If u can guess I am a fan of Pokemon I love the TCG-game. It
                    helped me alot with development of finding solutions in life
                    and in coding.
                </div>
                <div className="pokemon-right">
                    <CgPokemon />
                </div>
            </div>
        </>
    );
};

export default Info;
