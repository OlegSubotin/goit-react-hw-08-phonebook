import React, { useState } from 'react';
// import { Notify } from 'notiflix';
// import ClipLoader from 'react-spinner/ClipLoader';
import s from './LoginView.module.css';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };


    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    <span className={s.labelText}>Email</span>
                    <input
                        placeholder='example@gmail.com'
                        className={s.input}
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={s.label}>
                    <span className={s.labelText}>Password</span>
                    <input
                        placeholder='--------'
                        className={s.input}
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button className={s.submitButton} type="submit">
                    Log in
                </button>
            </form>
        </div>
    );
};


export default LoginView;