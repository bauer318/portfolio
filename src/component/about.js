import React from 'react';
import about_img from '../assets/img/image.png';
import pdf from '../assets/pdf/cv.pdf';

const About = () => {
    const aboutArray = ["About Me", "My introduction",
        "I have been a software engineer since June 2023. For the skills i have in-depth knowledge and experience in\n" +
    "                        programming languages such as Java and C#, RDBMS [Oracle DB, PostgreSQL] to mention only those."]
    return (
        <section className="about section" id="about">
            <h2 className="section__title">{aboutArray[0]}</h2>
            <span className="section__subtitle">{aboutArray[1]}</span>

            <div className="about__container container grid">
                <img src={about_img} alt="about-img"/>
                <div className="about__data">
                    <p className="about__description">
                        {aboutArray[2]}
                    </p>

                    <div className="about__buttons">
                        <a
                            download=""
                            href={pdf}
                            className="button buttons-flex"
                        >
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;