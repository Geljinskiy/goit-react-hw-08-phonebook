import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import { alignFlex } from 'components/Common/stylesObjects';

import authSelectors from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const isLoading = useSelector(authSelectors.isLoadingAuth)

  return (
    <>
      <Container maxWidth="lg">
        <Box
          component="header"
          p="10px 0"
          mb="30px"
          sx={alignFlex}
          borderBottom="2px solid rgba(15%,15%,15%,0.4)"
        >
          <Typography variant="logo">PhoneBook</Typography>
          {isLoggedIn ? (
            <Box sx={alignFlex}>
              <Typography mr='40px'>Hello, {userName}</Typography>

              <LoadingButton
                loading={isLoading}
                variant="outlined"
                to="/login"
                onClick={() => dispatch(logout())}
              >
                log out
              </LoadingButton>
            </Box>
          ) : (
            <Box>
              <Button
                sx={{ marginRight: '10px' }}
                component={NavLink}
                variant="text"
                to="/login"
              >
                log in
              </Button>
              <Button
                component={NavLink}
                variant="outlined"
                to="/"
              >
                sign up
              </Button>
            </Box>
          )}
        </Box>
      </Container>
      <Outlet />
    </>
  );
};

export default SharedLayout;
