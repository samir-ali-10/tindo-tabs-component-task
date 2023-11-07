import React, { useState } from 'react'
import NavigationTabs from './components/NavigationTabs'
import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';

export default function TabsComponent() {

    const [isActive, setIsActive] = useState("tab1");

    let handleTabOne = () => {
        setIsActive("tab1");
    }

    let handleTabTwo = () => {
        setIsActive("tab2");
    }


    return (
        <>
            <NavigationTabs isActive={isActive} handleTabOne={handleTabOne} handleTabTwo={handleTabTwo} />
            <div className="tabs">
                {
                    isActive === "tab1"
                        ?
                        <TabOne />
                        :
                        <TabTwo />
                }
            </div>
        </>
    )
}
