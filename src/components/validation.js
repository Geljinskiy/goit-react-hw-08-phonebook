import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const AddingContactSchema = Yup.object().shape({
  name: Yup.string().required("enter contact's name"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("enter contact's number"),
});

export const LogInSchema = Yup.object().shape({
  email: Yup.string().email().required('eneter your email please'),
  password: Yup.string().required('enter your password'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('eneter your name please'),
  email: Yup.string().email().required('eneter your email'),
  password: Yup.string().required('enter your password'),
});
