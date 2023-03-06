import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import NavigationLink from 'components/Common/styled-components/NavigationLink';
import authSelectors from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  // const theme = useTheme();

  return (
    <>
      <Box
        component="header"
        p="10px 120px"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="logo"
        >
          PhoneBook
        </Typography>
        {isLoggedIn ? (
          <>
            <p>Hello, {userName}</p>
            <NavigationLink onClick={() => dispatch(logout())} to="/login">
              log out
            </NavigationLink>
          </>
        ) : (
          <div>
            <Button
              sx={{ marginRight: '10px' }}
              component={NavigationLink}
              variant="contained"
              to="/login"
            >
              log in
            </Button>
            <Button
              component={NavigationLink}
              variant="contained"
              to="/register"
            >
              sign in
            </Button>
          </div>
        )}
      </Box>
      <Outlet />
    </>
  );
};

export default SharedLayout;
