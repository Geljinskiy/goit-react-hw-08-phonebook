import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavigationLink from 'components/Common/styled-components/NavigationLink';
import authSelectors from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import { alignFlex } from 'components/Common/stylesObjects/stylesObjects';

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
        >
          <Typography variant="logo">PhoneBook</Typography>
          {isLoggedIn ? (
            <Box sx={alignFlex}>
              <Typography mr='40px'>Hello, {userName}</Typography>

              <LoadingButton
                loading={isLoading}
                component={NavigationLink}
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
                component={NavigationLink}
                variant="text"
                to="/login"
              >
                log in
              </Button>
              <Button
                component={NavigationLink}
                variant="outlined"
                to="/register"
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
