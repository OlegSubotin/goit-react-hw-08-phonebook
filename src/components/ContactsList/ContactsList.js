import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useFetchAllContactsQuery } from "redux/contacts/contacts-slice";
import ContactsItem from 'components/ContactsItem';
import s from './ContactsList.module.css'

const ContactsList = () => {
    const { data, isFetching } = useFetchAllContactsQuery();
    const filter = useSelector(state => state.filter);

    const getFilteredContacts = (filter, contacts) => {
        return contacts?.filter(
            ({ name, phone }) =>
                name.toLowerCase().includes(filter.toLowerCase()) ||
                phone.includes(filter)
        );
    };

    const contacts = getFilteredContacts(filter, data);

    return (
        <>
            {isFetching && <ClipLoader className={s.loader} />}
            {!isFetching &&
                <ul className={s.list}>
                    {contacts && contacts.map(({ id, name, phone }) => (
                        <ContactsItem
                            key={id}
                            id={id}
                            name={name}
                            phone={phone}
                        />
                    ))}

                </ul>
            }
        </>
    );
};

export default ContactsList;