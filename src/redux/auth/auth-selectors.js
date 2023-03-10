const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const isLoadingAuth = state => state.auth.isLoading;


const authSelectors = {
  getIsLoggedIn,
  getUserName,
  isLoadingAuth,
};

export default authSelectors;
