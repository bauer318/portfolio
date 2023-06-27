import React from 'react';
import ServiceItem from "./serviceItem";

const Service = () => {
    const backendServices = [
        "Back-end logic",
        "Application programming interface [APIs]",
        "Database administration",
        "Server architecture and Tests"
    ];
    const frontendServices = ["User interface [Web-app]", "User interface [Desktop-app]", "Tests"];

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
                                {backendServices.map((service, index) => <ServiceItem key={index} service={service}/>)}
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
                                <ul className="services__modal-services grid">
                                    {frontendServices.map((service, index) => <ServiceItem key={index}
                                                                                           service={service}/>)}
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;