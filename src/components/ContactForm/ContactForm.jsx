import { useFormik } from 'formik';

import { AddingContactSchema } from 'components/validation';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations.js';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import Form from 'components/Common/styled-components/Form';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const onAddingContact = ({ name, phone }) => {
    const isExist = contacts.filter(contact => contact.name === name).length;

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    validationSchema: AddingContactSchema,

    onSubmit: ({ name, phone }) => {
      onAddingContact({ name, phone });
      formik.resetForm();
    },

    handleSubmit: (values, { setSubmitting }) => {
      console.log('values :', values);
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Typography variant="h1">Adding new contacts</Typography>

        <TextField
          //formik
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
          //mui
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="small"
          variant="filled"
          label="name"
          margin="normal"
          fullWidth
          required
        />

        <TextField
          //formik
          id="phone"
          type="tel"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.touched.phone && formik.errors.phone}
          helperText={formik.touched.phone && formik.errors.phone}
          onBlur={formik.handleBlur}
          //mui
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="small"
          variant="filled"
          label="phone"
          margin="normal"
          fullWidth
          required
        />
        <LoadingButton
          variant="contained"
          disabled={!(formik.dirty && formik.isValid)}
          type="submit"
          // loading={isLoading && formik.isValid && formik.dirty}
        >
          Add
        </LoadingButton>
      </Form>
    </>
  );
};

export default ContactForm;
