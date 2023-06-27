import React from 'react';

const Service = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Basically</span>

            <div className="services__container">
                {/*<!--==================== SERVICES 1====================-->*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-server-network services__icon"></i>
                        <h3 className="services__title">
                            Backend <br/>
                            Engineer
                        </h3>
                    </div>
                    <span
                        className="button button--flex button--small button--link services__button"
                    >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend Engineer</h4>
                            <i className="uil uil-times services__modal-close"></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Back-end logic</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Application programming interface [APIs]</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Database administration</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Server architecture and Tests</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*<!--==================== SERVICES 2====================-->*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Frontend <br/>
                            Engineer
                        </h3>
                    </div>
                    <span
                        className="button button--flex button--small button--link services__button"
                    >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">
                                Frontend <br/>
                                Engineer
                            </h4>
                            <i className="uil uil-times services__modal-close"></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>User interface [Web-app]</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>User interface [Desktop-app]</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Tests</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;