import React, { useState } from 'react'
import './NavbarDash.css'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';


function NavbarDash() {
    const [show, setShow] = useState(false)

    const LogoutButton = styled(Button)({
        color: '#ff9a43',
        '&:hover': {
            backgroundColor: '#ff9a43',
            boxShadow: 'none',
            color: 'white'
        },
    });

    function openMenu() {
        setShow(!show)
    }
    return (
        <div className='Navbar-container-dash'>

            <h2 className='Navbar-logo-dash'>LOGO</h2>
            <div className={show ? 'links_wrapper-dash nzale-dash' : 'links_wrapper-dash'}>
                {/* <NavLink to='/dashboard' onClick={() => setShow(false)}>Home</NavLink>
                <NavLink to='/dashboard/overview' onClick={() => setShow(false)}>Get Informed</NavLink> */}
                <NavLink to='/dashboard/resource' onClick={() => setShow(false)}>Resources</NavLink>
                <NavLink to='/dashboard/activity' onClick={() => setShow(false)}>Activities</NavLink>
                {/* <NavLink to='/dashboard/blog' onClick={() => setShow(false)}>Blogs</NavLink> */}
                <NavLink to='/'>
                <LogoutButton onClick={() => {
                    localStorage.clear();
                }}
                    startIcon={<ExitToAppIcon />}
                    color="inherit" >Logout</LogoutButton></NavLink>
            </div>
            <button className='Ham-dash' onClick={openMenu}> <FaBars className='Ham-dash' /></button>

        </div>
    )
}

export default NavbarDash;
