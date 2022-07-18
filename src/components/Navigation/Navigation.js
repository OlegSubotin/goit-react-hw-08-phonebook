import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Home
            </NavLink>
        </nav>
    );
};


export default Navigation;