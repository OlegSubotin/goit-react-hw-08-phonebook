import ContactsForm from "components/ContactsForm";
import ContactsFilter from "components/ContactsFilter";
import ContactsList from "components/ContactsList";
import s from './ContactsView.module.css';

const ContactsView = () => (
    <div className={s.wrapper}>
        <ContactsForm/>
        <ContactsFilter/>
        <ContactsList />
    </div>
);

export default ContactsView;