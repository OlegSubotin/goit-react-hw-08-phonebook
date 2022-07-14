import React from 'react';
import ReactLoading from 'react-loading';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.wrapper}>
            <ReactLoading type="bubbles" color="#663399" height="20%" width="20%" />
        </div>
    );
};


export default Loader;