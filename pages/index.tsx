import { useState } from "react";
import Project from "../components/Projects";
import projects from "../data/projects";

import Head from "next/head";
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function Index () {
    const [open,setOpen] = useState(false);
    const myName = "Rina"
    const [tab, setTab] = useState("product")

    return (
        <>
        <div id="navbar">
            <span>ayoooooo</span>
        </div>
        <Head>
            <title>Rina Takikawa</title>
            <meta name="description" content= "Welcome to the club"/>
        </Head>
        <div className="container">
            <div id="top-section">
                 <img src="/desktoplogo.png" id="logo-pic"/>
                 <h1> Hi, I'm {myName} 👋🏻  <br/> Welcome to the club.</h1>
                 <p>
                 📍Currently designing experiences and spearheading product strategy + growth at blockchain powered budgeting app, <a href="https://www.amoochlife.com/"> Mooch </a>
                 </p>
            </div>
        </div>
        <div id="flex-container">
                <img src="/teampic.jpg" id="team-pic"/>
                <img src="/profile.jpg" id="profile-pic"/>
                <img src="/ballet.jpg" id="ballet-pic"/>
                <img src="/florida.jpg" id="florida-pic"/>
                <img src="/coworking.jpg" id="cowork-pic"/>
        </div>
        <div className="container">

            <hr/>

            <h2> Welcome to my internet diary: </h2>

            <button className={(tab === "First tab") ? "tab selected" : "tab"} onClick={() => setTab("firsttab")}>First Tab</button>
            <button className={(tab === "Second tab") ? "tab selected" : "tab"} onClick={() => setTab ("secondtab")}>Second Tab</button>
            <button className={(tab === "Third tab") ? "tab selected" : "tab"} onClick={()=> setTab ("thirdtab")}>Third Tab</button>

            <a href="https://www.linkedin.com/in/rinatakikawa/" className="project-wrapper-long">
                <div className="project-box-long">
                    <img src="/coworking.jpg" alt="Enter alt here later" />
                    <h2> Project Name</h2>
                    <p> Pagragraph here</p>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/rinatakikawa/" className="project-wrapper">
                <div className="project-box">
                    <img src="/coworking.jpg" alt="Enter alt here later" />
                    <h2> Project Name</h2>
                    <p> Pagragraph here</p>
                </div>
            </a>
        </div>
            
    
            
        </>

        
    );

}
