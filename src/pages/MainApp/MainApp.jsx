import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Container from '@mui/system/Container';
import Box from '@mui/system/Box';

const MainApp = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <ContactForm />
      <Box
        sx={{
          border: '1px solid #000000',
          paddingBottom: '8px',
          borderRadius: '9px',
          marginTop:'50px'
        }}
      >
        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
};

export default MainApp;
