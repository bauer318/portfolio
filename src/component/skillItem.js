import React from 'react';

const SkillItem = ({name, percentage, className}) => {
    const skillClassName = "skills__percentage skills__"+className;
    return (
        <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills_name">{name}</h3>
                {/*<span className="skills__number">{percentage}%</span>*/}
            </div>
            <div className="skills__bar">
                <span className={skillClassName}></span>
            </div>
        </div>
    );
};

export default SkillItem;