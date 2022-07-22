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










// import { useSelector } from "react-redux";
// import { ClipLoader } from "react-spinners";
// import { useFetchAllContactsQuery } from "redux/contacts/contacts-slice";
// import ContactsItem from 'components/ContactsItem';
// import s from './ContactsList.module.css'

// const ContactsList = () => {
//     const { data, isFetching } = useFetchAllContactsQuery();
//     const filter = useSelector(state => state.filter);

//     const getFilteredContacts = (filter, contacts) => {
//         return contacts?.filter(
//             ({ name, phone }) =>
//                 name.toLowerCase().includes(filter.toLowerCase()) ||
//                 phone.includes(filter)
//         );
//     };

//     const contacts = getFilteredContacts(filter, data);

//     return (
//         <>
//             {isFetching && <ClipLoader className={s.loader} />}
//             {!isFetching &&
//                 <ul className={s.list}>
//                     {contacts && contacts.map(({ id, name, phone }) => (
//                         <ContactsItem
//                             key={id}
//                             id={id}
//                             name={name}
//                             phone={phone}
//                         />
//                     ))}

//                 </ul>
//             }
//         </>
//     );
// };

// export default ContactsList;