import React from 'react';
import QualificationItem from "./qualificationItem";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className="qualification__button button--flex qualification__active"
                        data-target="#education"
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>

                <div className="qualification__sections">
                    {/*<!--==================== QUALIFICATION CONTENT 1====================-->*/}
                    <div
                        className="qualification__content qualification__active"
                        data-content
                        id="education"
                    >
                        {/*<!--==================== QUALIFICATION 1====================-->*/}
                        <div className="qualification__data">
                            <QualificationItem name={"Electrical and computer engineering"}
                                               place={"DR Congo - University of Kinshasa"}
                                               period={"2013-2018"}/>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*<!--==================== QUALIFICATION 2====================-->*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <QualificationItem name={"Software engineering"}
                                               place={"Russia - Ryazan State Radio Engineering University named after V.F. Utkin"}
                                               period={"2018-2023"}/>
                        </div>

                        {/*<!--==================== QUALIFICATION 3====================-->*/}
                        <div className="qualification__data">
                            <QualificationItem name={"Software engineering [Master's degree]"} place={"Russia - Bauman Moscow State Technical University"}
                                               period={"2023-2025"}/>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*<!--==================== QUALIFICATION 4====================-->*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>

                    {/*<!--==================== QUALIFICATION CONTENT 2====================-->*/}
                    <div className="qualification__content" data-content id="work">
                        {/*<!--==================== QUALIFICATION 1====================-->*/}
                        <div className="qualification__data">
                            <QualificationItem name={"Director of the backend department"} place={"Bauzar-Digital - Russia"}
                                               period={"2021-"} link={"https://www.bauzar-digital.com"} seeMore={true}/>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*<!--==================== QUALIFICATION 2====================-->*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;