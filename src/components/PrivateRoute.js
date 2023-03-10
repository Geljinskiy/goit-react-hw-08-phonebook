import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import authSelectors from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
