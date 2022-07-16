import { NavLink } from "react-router-dom";
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
    return (
        <nav>
            <NavLink to="/register" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Registration
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Login
            </NavLink>
        </nav>
    );
};

export default AuthNavigation;