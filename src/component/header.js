import React from 'react';
import MenuItem from "./menuItem";

const Header = () => {
    return (
        <header className={"header"} id={"header"}>
            <nav className={"nav header"}>
                <div className={"nav__menu"} id={"nav-menu"}>
                    <ul className={"nav__list grid"}>
                        <MenuItem link={"#home"}
                                  aClassName={"nav__link active-link"}
                                  iClassName={"uil uil-estate nav__icon"}
                                  itemTitle={"Home"}/>

                        <MenuItem link={"#about"}
                                  aClassName={"nav__link"}
                                  iClassName={"uil uil-user nav__icon"}
                                  itemTitle={"About"}/>

                        <MenuItem link={"#skills"}
                                  aClassName={"nav__link"}
                                  iClassName={"uil uil-file-alt nav__icon"}
                                  itemTitle={"Skills"}/>

                        <MenuItem link={"#services"}
                                  aClassName={"nav__link"}
                                  iClassName={"uil uil-briefcase-alt nav__icon"}
                                  itemTitle={"Services"}/>

                        <MenuItem link={"#portfolio"}
                                  aClassName={"nav__link"}
                                  iClassName={"uil uil-scenery nav__icon"}
                                  itemTitle={"Portfolio"}/>

                        <MenuItem link={"#contact"}
                                  aClassName={"nav__link"}
                                  iClassName={"uil uil-message nav__icon"}
                                  itemTitle={"Contactme"}/>

                    </ul>
                    <i className="uil uil-times nav__close" id={"nav-close"}></i>
                </div>

                <div className={"nav__btns"}>
                    {/*Here we change the theme*/}
                    <i className="uil uil-moon change-theme" id={"theme-button"}></i>

                    <div className="nav__toggle" id={"nav-toggle"}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;