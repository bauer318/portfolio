import React from 'react';
import home_img from '../assets/img/img-bauer.png';
import {CiTwitter} from "react-icons/ci";
import {FiGithub, FiLinkedin} from "react-icons/fi";

const Home = () => {
    return (<section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social">
                    <a
                        href="https://www.linkedin.com/in/jacques-kibamba-53b0ab0"
                        target="_blank"
                        rel="noreferrer"
                        className="home__social-icon"
                    >
                        <i><FiLinkedin/></i>
                    </a>
                    <a
                        href="https://github.com/bauer318"
                        target="_blank"
                        rel="noreferrer"
                        className="home__social-icon"
                    >
                        <i><FiGithub/></i>
                    </a>
                    <a href={"https://twitter.com/jacques_kibamba"}
                       target={"_blank"}
                       rel="noreferrer"
                       className={"home__social-icon"}>
                        <i><CiTwitter/></i>
                    </a>
                </div>

                <div className="home__img">
                    <svg viewBox="0 0 200 200"
                         xmlns="http://www.w3.org/2000/svg"
                         className="home__blob">
                        <mask id="mask0" mask-type="alpha">
                            <path fill="#000000"
                                  d="M58.8,-57.7C73,-44.7,78.8,-22.4,77.5,-1.4C76.1,19.6,67.5,39.3,53.4,52.7C39.3,66,19.6,73.1,-0.2,73.3C-20.1,73.6,
                                  -40.2,66.9,-53.4,53.5C-66.6,40.2,-72.9,20.1,-73.3,-0.3C-73.6,-20.7,
                                  -67.9,-41.4,-54.6,-54.4C-41.4,-67.5,-20.7,-72.8,0.8,-73.6C22.4,-74.4,44.7,-70.8,58.8,-57.7Z"
                                  transform="translate(100 100)"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path fill="#000000"
                                  d="M58.8,-57.7C73,-44.7,78.8,-22.4,77.5,-1.4C76.1,19.6,67.5,39.3,53.4,52.7C39.3,66,19.6,73.1,-0.2,73.3C-20.1,73.6,
                                  -40.2,66.9,-53.4,53.5C-66.6,40.2,-72.9,20.1,-73.3,-0.3C-73.6,-20.7,
                                  -67.9,-41.4,-54.6,-54.4C-41.4,-67.5,-20.7,-72.8,0.8,-73.6C22.4,-74.4,44.7,-70.8,58.8,-57.7Z"
                                  transform="translate(100 100)"/>
                            <image
                                className="home__blob-img"
                                x="12"
                                y="18"
                                href={home_img}
                            />
                        </g>
                    </svg>
                </div>
                <div className="home__data">
                    <h1 className="home__title">Hi, I'm Jacques Kibamba</h1>
                    <h3 className="home__subtitle">Software engineer</h3>
                    <p className="home__description">
                        Graduated [bachelor's degree] in software engineering at <a href={"http://rsreu.ru/en/"}
                                                                                    target={"_blank"}
                                                                                    rel="noreferrer">Ryazan
                        State Radio Engineering University named after V.F. Utkin.</a><br/>
                        Master's student in software engineering at the <a href={"https://bmstu.ru/"}
                                                                           target={"_blank"}
                                                                           rel="noreferrer">Bauman Moscow State
                        Technical University.</a>
                    </p>
                    <a href="#contact" className="button button--flex">
                        Contact Me <i className="uil uil-message button__icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>);
};

export default Home;