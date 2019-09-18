import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Nav from '../../components/Nav';

export default function Main({ history }) {
  const navLinksData = [
    { name: 'Lorem Ipsum1' },
    { name: 'Lorem Ipsum2' },
    { name: 'Lorem Ipsum3' },
    { name: 'Lorem Ipsum4' },
    { name: 'Lorem Ipsum5' },
  ];

  return (
    <Container>
      <Nav history={history} navLinksData={navLinksData} />
    </Container>
  );
}

Main.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};
