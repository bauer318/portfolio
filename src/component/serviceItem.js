import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>{service}</p>
        </li>
    );
};

export default ServiceItem;