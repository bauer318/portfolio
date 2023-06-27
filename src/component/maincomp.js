import React from 'react';
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Qualification from "./qualification";
import Footer from "./footer";
import Service from "./service";
import Contact from "./contact";

const MainComp = () => {
    return (
        <>
            <main className={"main"}>
                {/*HOME*/}
                <Home/>
                {/*About*/}
                <About/>
                {/*Skills*/}
                <Skill/>
                {/*Qualifications*/}
                <Qualification/>
                {/*Service*/}
                <Service/>
                {/*Contact Me*/}
                <Contact/>
            </main>
            <Footer/>
        </>
    );
};

export default MainComp;