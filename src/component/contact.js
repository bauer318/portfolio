import React from 'react';

const Contact = () => {
    const email = "bauerpictu@gmail.com";
    const location = "Russia, Moscow";
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container">
                <div className={"contact__cus"}>
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">{email}</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">{location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;