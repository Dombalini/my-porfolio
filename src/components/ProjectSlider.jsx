import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataSlider } from "../data/dataSlider";
import "../styles/ProjectSlider.scss";

function ProjectsSlider() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="App">
            <Slider {...settings}>
                {dataSlider.map((item) => (
                    <a href={item.linkGit}>
                        <div className="card">
                            <div className="card-top">
                                <img src={item.linkImg} alt={item.title} />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h4>{item.text}</h4>
                            </div>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
}

export default ProjectsSlider;
