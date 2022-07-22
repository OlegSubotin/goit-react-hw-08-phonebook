import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import s from './ContactsForm.module.css';

const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(contactsSelectors.getContacts);
    const dispatch = useDispatch();

    const handleChangeName = e => {
        setName(e.currentTarget.value);
    };
    const handleChangePhone = e => {
        setNumber(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newContact = {
            name, number,
        };
        if (
            contacts.some(contact =>
                contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            return Notify.info(`${name} exists in your phonebook`);
        }
        dispatch(contactsOperations.addContact(newContact));
        Notify.success(`${name} has been added to your phonebook`);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    <span className={s.labelText}>
                        Name
                    </span>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChangeName}
                    />
                </label>
                <label className={s.label}>
                    <span className={s.labelText}>
                        Phone number
                    </span>
                    <input
                        className={s.input}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChangePhone}
                    />
                </label>
                <button className={s.button} type='submit'>
                    Add contact
                </button>
            </form>
        </div>
    );
};

export default ContactsForm;