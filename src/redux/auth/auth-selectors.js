const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const isLoadingAuth = state => state.auth.isLoading;

const isRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  isLoadingAuth,
  isRefreshing,
};

export default authSelectors;
