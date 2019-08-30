import React from 'react';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>
        <b>Harpy Network</b> is a fiction server, part of{' '}
        <a
          href="http://www.owbn.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OWbN
        </a>{' '}
        (
        <a
          href="http://www.owbn.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          One World by Night
        </a>
        ) universe, and have value as In Game application only.
      </span>
      <br />
      <span>
        All the data and information, except for pictures and clan logos, should
        be considered as In Game information. Pictures and Logos only exist in
        Out of Character, and are there only to make the application interface
        more friendly and fun.
      </span>
      <br />
      <span>
        It was built by an In Game character and it is necessary to contact this
        character In Game to be able to access this server.
      </span>
      <br />
      <span>
        Any ST can join this server as Out of Character without need to contact
        the character In Game, to do that, just need to contact the Player by
        e-mail: <b>webmaster@memathias.com</b>, please, copy the local ST as
        well: <b>owbn.curitiba@gmail.com</b> .
      </span>
    </Container>
  );
}
