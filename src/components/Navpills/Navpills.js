import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li className="brand"><a href="/">Fortnite Clicky Game</a></li>
            <li> Click any image to start! </li>
            <li> Score: 0 | High Score: 0 </li>
        </ul>
    </div>
);

export default Navpills;