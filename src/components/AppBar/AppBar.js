import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import Navigation from "components/Navigation";
import AuthNavigation from "components/AuthNavigation";
import UserMenu from "components/UserMenu";
import s from './AppBar.module.css';

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav className={s.navigation}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </nav>
    );
};

export default AppBar;













// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import s from './AppBar.module.css';

// const AppBar = () => {
//     return (
//         <nav className={s.navigation}>
//             <NavLink to="/" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
//                 Home
//             </NavLink>
//             <NavLink to="/contacts" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
//                 Contacts
//             </NavLink>
//             <NavLink to="/register" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
//                 Registration
//             </NavLink>
//             <NavLink to="/login" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
//                 Login
//             </NavLink>
//         </nav>
//     )
// };

// export default AppBar;