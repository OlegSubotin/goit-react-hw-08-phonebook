const getLoggedIn = state => state?.auth.isLoggedIn;

const getUserName = state => state?.auth.user.name;

const getToken = state => state?.auth.token;

const authSelectors = {
    getLoggedIn,
    getUserName,
    getToken,
};

export default authSelectors;