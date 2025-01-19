import React, { useContext, useRef } from 'react'
import "./Contact.css";
import emailjs from 'emailjs-com';
import Phone from "../../image/phone.png.webp"
import Email from "../../image/email.png.webp"
import Address from "../../image/address.png.webp"
import { ThemeContext } from '../../context';
import  Noty from "noty";

import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";
// my-portfolio\node_modules\noty\lib\themes\mint.css
function Contact() {

    const formRef=useRef();
    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm("service_1win0kp", 'template_4df3ffp', formRef.current, 'D08eAGEFQdOIZvpMt')
        .then((result) => {
           
           
        }, (error) => {
            new Noty(
                {
                      text:"Something went wrong",
                   
                }
            ).show();
        });
    };

    const e=()=>{
        new Noty(
            {
                type:"success",
                    text:"Response submitted",
                    timeout:2000,
                    progressBar:false,
                    layout:"topRight"
                  
            }
        ).show();
    }
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    
    
    return (
        <div className="c">
           <div className="c-bg"></div>
           <div className="c-wrapper">
               <div className="c-left">
                   <h1 className="c-title">Let's discuss your project</h1>
               <div className="c-info">
                   <div className="c-info-item">
                       <img src={Phone} alt="" className="c-icon" />
                      8000466333
                   </div>
                   <div className="c-info-item">
                       <img src={Email} alt="" className="c-icon" />
                       aumyadav0311@gmail.com
                   </div>
                   <div className="c-info-item">
                       <img src={Address} alt=""  className="c-icon"/>
                     Somewhere on the earth .
                  
                   </div>
               </div>

               </div>
               <div className="c-right">
                   <p className="c-desc">
                       <b>What's your story ?</b> I would like to 
                  know more about u or about your story , or maybe u can write something to me 
                    by filling this form .
                   </p>
                   <form ref= {formRef} onSubmit={handleSubmit}>
                       <input style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                       <input style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                       <input style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}} rows="5" placeholder="Message" name="message"/>
                        <button onClick={e}>Submit it !</button>
                </form>
               </div>
           </div>
        </div>
    )
}

export default Contact
