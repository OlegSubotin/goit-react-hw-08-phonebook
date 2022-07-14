import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <nav className={s.navigation}>
            <NavLink to="/" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Home
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Contacts
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Registration
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Login
            </NavLink>
        </nav>
    )
};

export default AppBar;