import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from '@mui/system/Container';
import Box from '@mui/system/Box';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';

import { fetchContacts } from '../../redux/contacts/operations';

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
          border: '2px solid rgba(15%,15%,15%,0.6)',
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
