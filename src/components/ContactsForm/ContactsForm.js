import { useState } from 'react';
import { Notify } from 'notiflix';
import { ClipLoader } from 'react-spinners';
import { useAddContactMutation, useFetchAllContactsQuery } from 'redux/contacts/contacts-slice';
import s from './ContactsForm.module.css';

const ContactsForm = () => {
    const [params, setParams] = useState({ name: '', phone: '' });
    const [addContact, { isLoading }] = useAddContactMutation();
    const { data } = useFetchAllContactsQuery();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        setParams({ ...params, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        data.find(({ name, phone }) =>
            params.name === name ||
            params.phone === phone
        )
            ? Notify.failure(`${params.name} exists in your phonebook`)
            : addContactOnSubmit();
    };

    const addContactOnSubmit = () => {
        addContact(params);
        Notify.success(`${params.name} has been added to your phonebook`);
        reset();
    };

    const reset = () => {
        setParams({ name: '', phone: '' });
    };

    return (
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
                    value={params.name}
                    onChange={handleChange}
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
                    value={params.phone}
                    onChange={handleChange}
                />
            </label>
            <button className={s.button} type='submit'>
                {isLoading ? <ClipLoader size='10px' /> : 'Add contact'}
            </button>
        </form>
    );
};

export default ContactsForm;