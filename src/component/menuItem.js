import React from 'react';

const MenuItem = ({link, aClassName, iClassName, itemTitle}) => {
    return (
        <li>
            <a href={link} className={aClassName}>
                <i className={iClassName}></i>{itemTitle}
            </a>
        </li>
    );
};

export default MenuItem;