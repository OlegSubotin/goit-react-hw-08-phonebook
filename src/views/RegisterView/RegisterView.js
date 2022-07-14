import React, { useState } from 'react';
// import { Notify } from 'notiflix';
// import ClipLoader from 'react-spinner/ClipLoader';
import s from './RegisterView.module.css';

const RegisterView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            case 'user':
                return setUser(value);
            default:
                return;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(user);
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
        setUser('');
    };


    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    <span className={s.labelText}>Name</span>
                    <input
                        placeholder='John'
                        className={s.input}
                        type="text"
                        name="user"
                        required
                        value={user}
                        onChange={handleChange}
                    />
                </label>
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


export default RegisterView;