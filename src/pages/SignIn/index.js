import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import HarpyButton from '~/components/HarpyButton';
import logo from '~/assets/logo_header.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('An e-mail address is required'),
  password: Yup.string().required('Enter a password'),
});

export default function SignIn() {
  function handleSubmit() {}

  return (
    <Container>
      <img src={logo} alt="Harpy Network" />
      <span>Welcome to:</span>
      <strong>Harpy Network</strong>

      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Enter your e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Enter your Password"
          />

          <HarpyButton type="submit">Login</HarpyButton>
        </Form>
      </Content>
    </Container>
  );
}
