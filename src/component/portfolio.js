import React from 'react';
import portfolio1 from '../assets/img/portfolio1.jpg';
import portfolio2 from '../assets/img/portfolio2.jpg';
import portfolio3 from '../assets/img/portfolio3.jpg';

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container swiper-container">
                <div className="swiper-wrapper">
                    {/*<!--==================== PORTFOLIO 1====================-->*/}
                    <div className="portfolio__content grid swiper-slide">
                        <img
                            src={portfolio1}
                            alt="portfolio img1"
                        />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Moder Website</h3>
                            <p className="portfolio__description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a
                                href="#"
                                className="button button--flex button--small portfolio__button"
                            >
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>

                    {/*<!--==================== PORTFOLIO 2====================-->*/}
                    <div className="portfolio__content grid swiper-slide">
                        <img
                            src={portfolio2}
                            alt="portfolio img1"
                        />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Brand Design</h3>
                            <p className="portfolio__description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a
                                href="#"
                                className="button button--flex button--small portfolio__button"
                            >
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>

                    {/*<!--==================== PORTFOLIO 3====================-->*/}
                    <div className="portfolio__content grid swiper-slide">
                        <img
                            src={portfolio3}
                            alt="portfolio img1"
                        />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Online Store</h3>
                            <p className="portfolio__description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a
                                href="#"
                                className="button button--flex button--small portfolio__button"
                            >
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/*<!-- Add Arrows -->*/}
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                {/*<!-- Add Pagination -->*/}
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Portfolio;