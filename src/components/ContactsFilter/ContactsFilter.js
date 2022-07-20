import { useDispatch } from "react-redux";
import { filteredContact } from 'redux/contacts/contacts-slice';
import s from './ContactsFilter.module.css';

const ContactsFilter = () => {
    const dispatch = useDispatch();

    const onFilterInputChange = e => {
        dispatch(filteredContact(e.currentTarget.value));
    };

    return (
        <div className={s.wrapper}>
            <label>
                <span className={s.labelText}>
                    Find contact using name or phone number
                </span>
                <input
                    className={s.input}
                    type='text'
                    name='filter'
                    placeholder='Viktor'
                    onChange={onFilterInputChange()}
                />
            </label>
        </div>
    );
};

export default ContactsFilter;