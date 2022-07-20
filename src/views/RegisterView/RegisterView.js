import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './RegisterView.module.css';

const RegisterView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            case 'name':
                return setName(value);
            default:
                return;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
        setName('');
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
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
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
                        placeholder='Must have at least 8 characters'
                        title="Password must contain letters and numbers"
                        className={s.input}
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button className={s.submitButton} type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};


export default RegisterView;