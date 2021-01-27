import React from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
} from 'react-icons/fa';
export const Sidebar = () => {
    return (
        <div className="sidebar" data-testId="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span>Inbox</span>
                    <span> <FaInbox/> </span>
                </li>
                <li>
                    <span>Today</span>
                    <span> <FaRegCalendar/> </span>
                </li>
                <li>
                    <span>Next 7 days</span>
                    <span> <FaRegCalendarAlt/> </span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span>
                    <FaChevronDown/>
                </span>
                <h2>Projects</h2>
                <ul className="sidebar__projects">
                    Projects will be here!
                </ul>
            </div>
        </div>
    )
}
