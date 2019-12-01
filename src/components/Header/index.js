import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, LogoutButton } from './styles';
import logoHeader from '~/assets/logo_header.png';
import { spring } from '~/utils/animations';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <motion.img
              src={logoHeader}
              alt="Harpy Network"
              initial={{ y: 100, x: 500 }}
              animate={{ y: 0, x: 0 }}
              transition={{ ...spring, mass: 1.8 }}
            />
            <strong>Harpy Network</strong>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img
              src={
                profile.avatar ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
          <LogoutButton onClick={handleSignOut}>Logout</LogoutButton>
        </aside>
      </Content>
    </Container>
  );
}
