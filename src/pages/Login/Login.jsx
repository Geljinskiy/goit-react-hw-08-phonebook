import RegistrationForm from 'components/RegistrationForm';

import { LogInSchema } from 'components/validation';
import { login } from 'redux/auth/auth-operations';

const Login = () => {
  const initialValues = { email: '', password: '' };
  return (
    <RegistrationForm
      authOperation={login}
      initialVals={initialValues}
      validationSchema={LogInSchema}
    />
  );
};

export default Login;
