import React from 'react';
import SkillItem from "./skillItem";

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical</span>

            <div className="skills__container container grid">
                <div>
                    {/*<!--==================== SKILLS 1 ====================-->*/}
                    <div className="skills__content skills__open">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className="skills_subtitle">Deep and basic knowledge</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <SkillItem name={"Java"} percentage={"95"} className={"java"}/>

                            <SkillItem name={"C#"} percentage={"85"} className={"csharp"}/>

                            <SkillItem name={"C"} percentage={"55"} className={"c"}/>

                            <SkillItem name={"C++"} percentage={"65"} className={"cPlus"}/>

                            <SkillItem name={"Haskell"} percentage={"55"} className={"haskell"}/>

                            <SkillItem name={"Prolog"} percentage={"55"} className={"prolog"}/>

                            <SkillItem name={"Kotlin"} percentage={"65"} className={"kotlin"}/>
                        </div>
                    </div>
                    {/*<!--==================== SKILLS 2 ====================-->*/}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills_subtitle">Basic knowledge</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <SkillItem name={"HTML"} percentage={"70"} className={"html"}/>

                            <SkillItem name={"CSS"} percentage={"55"} className={"css"}/>

                            <SkillItem name={"JavaScript"} percentage={"80"} className={"js"}/>

                            <SkillItem name={"React.js"} percentage={"80"} className={"react"}/>
                        </div>
                    </div>

                    {/*<!--==================== SKILLS 3 ====================-->*/}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-process skills__icon"></i>

                            <div>
                                <h1 className="skills__title">DevOps</h1>
                                <span className="skills_subtitle">Basic knowledge</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <SkillItem name={"Docker"} percentage={"60"} className={"docker"}/>

                            <SkillItem name={"Kubernetes"} percentage={"35"} className={"k8s"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;