import ContactsForm from "components/ContactsForm";
import ContactsFilter from "components/ContactsFilter";
import ContactsList from "components/ContactsList";

const ContactsView = () => (
    <>
        <ContactsForm/>
        <ContactsFilter/>
        <ContactsList />
    </>
);

export default ContactsView;