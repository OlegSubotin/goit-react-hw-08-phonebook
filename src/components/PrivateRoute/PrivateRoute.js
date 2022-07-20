import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <>
            {isLoggedIn && children}
        </>
    );
};

export default PrivateRoute;