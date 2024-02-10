import React, { useContext } from 'react'
import "./Toggle.css"
import Sun from "../../image/sun.png.webp"
import Moon from "../../image/moon.png.webp"
import { ThemeContext } from '../../context'
function Toggle() {
    const theme=useContext(ThemeContext);
  function handleClick () {
     
    theme.dispatch({});

    };
   
    return (
        <div className="t">
            <img src ={Sun} onClick={handleClick} alt="" className="t-icon-s" />
            <img src ={Moon}  alt="" className="t-icon-m" />
            <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? -2 :30,transition:"all 0.3s ease-in-out" }}></div>
        </div>
    )
   
}

export default Toggle
