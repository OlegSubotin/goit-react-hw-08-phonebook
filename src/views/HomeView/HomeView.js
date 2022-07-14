import React from "react";
import s from './HomeView.module.css';

const HomeView = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>
                Welcome to Phonebook App
            </h1>
        </div>
    );
};

export default HomeView;