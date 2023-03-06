import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'components/Common/styled-components/Form';
import Label from 'components/Common/styled-components/Label';
import MainButtonStyle from 'components/Common/styled-components/MainButton';

import { register } from 'redux/auth/auth-operations';

const Signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onInput = ev => {
    const input = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    switch (input) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    console.log(`we're sending this obj: ${name} ,  ${email} ,  ${password}`);
    ev.currentTarget.reset();

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <p>Name</p>
        <input
          //   onChange={onInput}
          value={name}
          onChange={onInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <p>Email</p>
        <input
          value={email}
          onChange={onInput}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </Label>
      <Label>
        <p>Password</p>
        <input
          value={password}
          onChange={onInput}
          type="password"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          required
        />
      </Label>
      <MainButtonStyle>Sign in</MainButtonStyle>
    </Form>
  );
};

export default Signin;
