import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';
import avatar from './avatar.png';


const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(authSelectors.getUserName);

    const onLogOutBtnClick = () => {
        dispatch(authOperations.logOut());
        navigate('/');
    };

    return (
        <div className={s.wrapper}>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? s.active : s.inactive)} >
                Contacts
            </NavLink>
            <img className={s.image} src={avatar} alt='default avatar' width='32' />
            <p className={s.text}>Welcome, {name}!</p>
            <button className={s.button} type='button' onClick={onLogOutBtnClick}>
                Log out
            </button>
        </div>
    );
};

export default UserMenu;