import React, { useState } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import "./common.css"
import Sidebar from 'react-sidebar';

const NavbarComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    }

    return (<>
        <Navbar
            className="NavbarCss"
        // color="dark"
        // dark
        >
            <NavbarBrand href="/"
                onClick={() => onSetSidebarOpen(true)}
            >
                <img
                    alt="logo"
                    src="/logo-white.svg"
                    style={{
                        height: 40,
                        width: 40
                    }}
                />
            </NavbarBrand>
        </Navbar>
        <Sidebar
            sidebar={<div>Your Sidebar Content</div>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: 'white' } }} // Customize styles as needed
        >
        </Sidebar>
    </>)
}

export { NavbarComponent as Navbar }