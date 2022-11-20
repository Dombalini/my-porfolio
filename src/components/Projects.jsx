import React from "react";
import Header from "./Header";
import ProjectsSlider from "./ProjectSlider";
import "../styles/Projects.scss";

const Projects = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="main-container">
                    <div className="main-text">
                        My <span className="orange">Projects</span>
                    </div>
                    <ProjectsSlider />
                </div>
            </main>
        </>
    );
};

export default Projects;
