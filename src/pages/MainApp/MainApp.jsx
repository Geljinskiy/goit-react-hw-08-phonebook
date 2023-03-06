import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Box from '../../components/Common/Box';
import css from '../../components/Common/Common.module.css';

const MainApp = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={40} ml={40}>
      <Box mb={32} fontSize={18} width={380}>
        <h1 className={css.heading}>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box fontSize={18} width={360}>
        <h2 className={css.heading}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Box>
    </Box>
  );
};

export default MainApp;
