import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'components/Common/styled-components/Form';
import Label from 'components/Common/styled-components/Label';
import MainButtonStyle from 'components/Common/styled-components/MainButton';

import { login } from 'redux/auth/auth-operations';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onInput = ev => {
    const input = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    switch (input) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = ev => {
    ev.preventDefault();
    dispatch(login({ email, password }));
    console.log(`we're sending this obj:   ${email} ,  ${password}`);
    ev.currentTarget.reset();

    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <p>Email</p>
        <input
          value={email}
          onChange={onInput}
          type="text"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <p>Password</p>
        <input
          value={password}
          onChange={onInput}
          type="text"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          required
        />
      </Label>
      <MainButtonStyle>Log in</MainButtonStyle>
    </Form>
  );
};

export default Signin;
