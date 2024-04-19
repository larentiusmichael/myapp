import React from "react"

import phoneImg from "../images/phone-icon.png";
import mailImg from "../images/mail-icon.png";

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img} alt="Profile"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneImg} alt="Phone" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailImg} alt="Mail" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}