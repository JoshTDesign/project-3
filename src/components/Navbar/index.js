import React, { useState } from 'react';
import MenuBar from "../../components/MenuBar";
import SidebarMenu from "../../components/SidebarMenu";

export default function Navbar() {
    // const [drawer, setDrawer] = useState(false);
    // const [title, setTitle] = useState('Home');

    // const toggleDrawer = () => {
    //     setTitle(title);
    //     setDrawer(variant == 'temporary' ? false : drawer);
    //     setDrawer(!drawer);
    //     console.log('MenuBar Title: ', title)
    // }

    return (
        <div>
            <MenuBar 
                //  title={title} 
                // onMenuClick={toggleDrawer}
                />
            {/* <SidebarMenu 
                open={drawer} 
                onClose={toggleDrawer} 
                onItemClick={onItemClick} 
                variant={variant}
            /> */}
        </div>
    )
}
