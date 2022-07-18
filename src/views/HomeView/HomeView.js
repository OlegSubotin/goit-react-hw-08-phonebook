import React from "react";
import { NavLink } from "react-router-dom";
import s from './HomeView.module.css';

const HomeView = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>
                Welcome to Phonebook App
            </h1>
            <p className={s.text}>
                For using this app you are supposed to
                &nbsp;
                <NavLink to="/register" className={s.link} >
                    register
                </NavLink>
                &nbsp;
                yourself.
                </p>
                <p className={s.text}>
                However you are already signed up, just
                &nbsp;
                <NavLink to="/login" className={s.link} >
                    log in
                </NavLink>
                &nbsp;
                and enjoy it. Good luck!
            </p>
        </div>
    );
};

export default HomeView;