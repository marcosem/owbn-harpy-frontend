import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Wrapper, Content } from './styles';
import Footer from '~/components/Footer';

import logo from '~/assets/logo_header.png';
import { spring } from '~/utils/animations';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <motion.img
        src={logo}
        alt="Harpy Network"
        initial={{ y: -100, x: 100 }}
        animate={{ y: 0, x: 0 }}
        transition={{ ...spring, mass: 1.8 }}
      />
      <strong>Harpy Network</strong>
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
