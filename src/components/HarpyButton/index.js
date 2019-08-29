import React from 'react';
// import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { SubButton } from './styles';

export default function HarpyButton({ children, ...props }) {
  /*
  const loading = useSelector(
    state => state.auth.loading || state.meetup.loading
  );
  */
  const loading = false;

  return (
    <SubButton loading={loading ? 1 : 0} {...props}>
      {loading ? <FaSpinner size={16} color="#fff" /> : children}
    </SubButton>
  );
}

HarpyButton.propTypes = {
  children: PropTypes.element,
};

HarpyButton.defaultProps = {
  children: {},
};
