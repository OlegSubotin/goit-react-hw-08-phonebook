const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const authSelectors = {
    getLoggedIn,
    getUserName,
};

export default authSelectors;