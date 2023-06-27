import React from 'react';
import testimonial1 from '../assets/img/testimonial1.jpg'
import testimonial2 from '../assets/img/testimonial3.jpg'
import testimonial3 from '../assets/img/testimonial3.jpg'
const Testimonial = () => {
    return (
        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container swiper-container">
                <div className="swiper-wrapper">
                    {/*<!--==================== TESTIMONIAL 2====================-->*/}
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img
                                    src={testimonial1}
                                    alt="testimonial_1"
                                    className="testimonial__img"
                                />

                                <div className="testimonial__name">
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="tesionila__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>

                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                            provident molestiae, exercitationem earum veritatis mollitia!
                        </p>
                    </div>

                    {/*<!--==================== TESTIMONIAL 1====================-->*/}
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img
                                    src={testimonial2}
                                    alt="testimonial_1"
                                    className="testimonial__img"
                                />

                                <div className="testimonial__name">
                                    <h3 className="testimonial__name">Matt Robinson</h3>
                                    <span className="tesionila__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>

                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                            provident molestiae, exercitationem earum veritatis mollitia!
                        </p>
                    </div>

                    {/*<!--==================== TESTIMONIAL 3====================-->*/}
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img
                                    src={testimonial3}
                                    alt="testimonial_1"
                                    className="testimonial__img"
                                />

                                <div className="testimonial__name">
                                    <h3 className="testimonial__name">Raul Smith</h3>
                                    <span className="tesionila__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                                <i className="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>

                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                            provident molestiae, exercitationem earum veritatis mollitia!
                        </p>
                    </div>
                </div>
                {/*<!-- Add Pagination -->*/}
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>
    );
};

export default Testimonial;