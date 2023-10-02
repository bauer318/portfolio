import React from 'react';

const QualificationItem = ({name, place, period, link, seeMore}) => {

    return (
        <div>
            <h3 className="qualification__title">{name}</h3>
            <span className="qualification__subtitle">
                {seeMore ? <a href={link} target={"_blank"}>{place}</a> : place}
            </span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {period}
            </div>
        </div>
    );
};

export default QualificationItem;