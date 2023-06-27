import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Jacques K.</h1>
                        <span className="footer__subtitle">SE</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a
                            href="https://twitter.com/jacques_kibamba"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-twitter"></i>
                        </a>

                        <a
                            href="https://instagram.com/jacques_kibamba"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jacques-kibamba-537b0ab0"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-linkedin"></i>
                        </a>

                        <a
                            href="https://t.me/bjack318"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-telegram"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">&#169; Jacques Kibamba. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;