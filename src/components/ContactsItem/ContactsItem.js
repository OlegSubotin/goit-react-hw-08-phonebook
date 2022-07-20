import { useDispatch } from "react-redux";
import contactsOperations from 'redux/contacts/contacts-operations';
import s from './ContactsItem.module.css';

const ContactsItem = ({ id, name, phone }) => {
    const dispatch = useDispatch;

    return (
        <li className={s.item}>
            <p className={s.text}>{name}</p>
            <p className={s.text}>{phone}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
            </button>
        </li>
    );
};

export default ContactsItem;







// import { ClipLoader } from "react-spinners";
// import { useDeleteContactMutation } from "redux/contacts/contacts-slice";
// import s from './ContactsItem.module.css';


// const ContactsItem = ({ id, name, phone }) => {
//     const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

//     return (
//         <li className={s.item}>
//             <p className={s.text}>{name}</p>
//             <p className={s.text}>{phone}</p>
//             <button
//                 className={s.button}
//                 type='button'
//                 onClick={() => deleteContact(id)}
//                 disabled={isDeleting}
//             >
//                 {isDeleting ? <ClipLoader size={10} /> : "Delete"}
//             </button>
//         </li>
//     );
// };

// export default ContactsItem;