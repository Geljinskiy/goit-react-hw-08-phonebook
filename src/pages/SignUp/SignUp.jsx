import RegistrationForm from 'components/RegistrationForm';
import { SignUpSchema } from 'components/validation';
import { register } from 'redux/auth/auth-operations';

const SignUp = () => {
  const initialValues = { name: '', email: '', password: '' };
  return (
    <RegistrationForm
      authOperation={register}
      initialVals={initialValues}
      validationSchema={SignUpSchema}
    />
  );
};

export default SignUp;
