import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/contacts/contacts-actions";
import s from './ContactsFilter.module.css';

const ContactsFilter = () => {
    const value = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onFilterInputChange = e => {
        dispatch(changeFilter(e.currentTarget.value));
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
                    value={value}
                    placeholder='Viktor'
                    onChange={onFilterInputChange()}
                />
            </label>
        </div>
    );
};

export default ContactsFilter;