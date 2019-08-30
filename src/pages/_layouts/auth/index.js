import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';
import Footer from '~/components/Footer';

import logo from '~/assets/logo_header.png';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <img src={logo} alt="Harpy Network" />
      <strong>Harpy Network</strong>
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
