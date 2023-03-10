// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import authSelectors from 'redux/auth/auth-selectors';

// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   console.log('isLoggedIn :', isLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to="/login" />}
//     </Route>
//   );
// }
