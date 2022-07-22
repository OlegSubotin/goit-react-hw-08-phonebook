import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "redux/contacts/contacts-selectors";
import contactsOperations from 'redux/contacts/contacts-operations';
import ContactsItem from 'components/ContactsItem';
import s from './ContactsList.module.css';


const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);
    const filterValue = useSelector(contactsSelectors.getFilterValue);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const filteredContacts = () => {
        const normalizedFilter = filterValue.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const filteredContactList = filteredContacts();

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {contacts && filteredContactList.map(({ id, name, number }) => (
                    <ContactsItem
                        key={id}
                        id={id}
                        name={name}
                        phone={number}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactsList;