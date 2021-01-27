import React from "react";
import {FaBars,FaHome,FaPlus,FaChartLine,FaBell,FaQuestionCircle,FaUserCircle} from "react-icons/fa"
export const Header = () => {
    return (
        <header className="header" data-testid = "header">
            <nav>
                <div>
                    <ul>
                        <li> <FaBars/> </li>
                        <li> <FaHome/> </li>
                        <li><input type="search" placeholder="Find"/> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> <FaPlus/> </li>
                        <li> <FaChartLine/> </li>
                        <li> <FaQuestionCircle/> </li>
                        <li> <FaBell/> </li>
                        <li> <FaUserCircle/> </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}