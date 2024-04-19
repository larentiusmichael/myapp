import React from "react"
import ReactIconSmall from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={ReactIconSmall} alt="Airbnb Icon" className="nav--logo" />
        </nav>
    )
}