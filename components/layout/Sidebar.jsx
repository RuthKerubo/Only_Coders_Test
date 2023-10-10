'use client';

import React, { useRef } from 'react';
import OutsideClick from '@utils/outsideClick';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';
import TheLogo from './sidebar/TheLogo';


const Sidebar = ({mobileNavsidebar}) => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = OutsideClick(sidebarRef);

    //console.log("sidebar Ref", sidebarRef)
    //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
    return (
        <aside className={`${mobileNavsidebar ? 'block' : 'hidden'} sm:flex sm:flex-col z-50`} ref={sidebarRef}>
            <TheLogo/>
            
            <div className="flex-grow flex flex-col justify-between text-gray-900 bg-white">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;