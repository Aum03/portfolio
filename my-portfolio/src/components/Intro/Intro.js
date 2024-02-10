import React from "react";
import MOUSE from "../../image/mouse.png"
import "./Intro.css"
import Me from "../../image/me2.png.webp"

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello my name is </h2>
                    <h1 className="i-name">Aum Yadav</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Cloud Enthusiastic</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Movie-maniac</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Anime</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites , web-apps and much more .
                         
                    </div>
                    <div className="i-mouse-wrapper">
               <img src={MOUSE} alt="mouse" className="i-mouse"/>
                    </div>
                    
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="img" className="i-img" />
            </div>
        </div>
    );
}

export default Intro;
