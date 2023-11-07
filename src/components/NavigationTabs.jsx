import React from 'react'

export default function NavigationTabs({ isActive, handleTabOne, handleTabTwo }) {


    return (
        <div className='navigation_tabs'>
            <ul>
                <li className={isActive === "tab1" ? "active" : ""} onClick={handleTabOne}>Tab 1</li>
                <li className={isActive === "tab2" ? "active" : ""} onClick={handleTabTwo}>Tab 2</li>
            </ul>
        </div>
    )
}
