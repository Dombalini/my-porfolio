import React from "react";
import "../styles/About.scss";
import Header from "./Header";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const About = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="container">
                    <div className="container-title">
                        A little <span className="orange">About</span> ME
                    </div>
                    <div className="main-container">
                        <div className="main-container-left">
                            My name is &nbsp;
                            <span className="orange-main">Dominik Zovko</span> .
                            I'm from Osijek,Croatia. I have been working as a
                            CAD/CAM Dental technician for 10 years, mainly 3D
                            modeling. I have come to a point where i want some
                            change. I always had pashion for programing. Day by
                            day I've been getting to know HTML, CSS and
                            JavaScript. Then came Sass, git and some Jquery.
                            After that came React the toughest and moust fun
                            part of programing because you can finaly start
                            putting together that puzzle that you started.{" "}
                            <br /> I have finished the education program for
                            &nbsp;
                            <span className="orange-main">Front-End</span>
                            <br />
                            developers at University College Algebra. I am a
                            quick <br /> learner and I want to further improve
                            my skills.
                        </div>
                        <div className="main-container-right">
                            <div className="cards">
                                <div className="card-title">HTML</div>
                                <div className="card-icon">
                                    <ImHtmlFive />
                                </div>
                                <div className="card-text">
                                    HTML is a fundamental language for all
                                    Front-end developers. I love the simplicity
                                    of it and im sure we all remember our first
                                    HELLO WORLD.
                                </div>
                            </div>
                            <div className="cards">
                                <div className="card-title">CSS</div>
                                <div className="card-icon">
                                    <SiCss3 />
                                </div>
                                <div className="card-text">
                                    CSS is my favourite tool in Web Development.{" "}
                                    <br />I enjoy using it to beautify my
                                    projects.
                                </div>
                            </div>
                            <div className="cards">
                                <div className="card-title">JAVA SCRIPT</div>
                                <div className="card-icon">
                                    <SiJavascript />
                                </div>
                                <div className="card-text">
                                    I have a solid knowledge of JS including ES6
                                    and improve it daily by using it to refactor
                                    some old projects and building new ones.
                                </div>
                            </div>
                            <div className="cards">
                                <div className="card-title">REACT.JS</div>
                                <div className="card-icon">
                                    <RiReactjsFill />
                                </div>
                                <div className="card-text">
                                    Learned fundamentals of this library and
                                    used it together with state-menagment and
                                    Styled Components in one of the projects.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
