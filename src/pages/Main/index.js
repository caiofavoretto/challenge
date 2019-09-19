import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Nav from '../../components/Nav';

export default function Main({ history }) {
  const navLinksData = [
    { name: 'Lorem Ipsum1', selected: false },
    { name: 'Lorem Ipsum2', selected: false },
    { name: 'Lorem Ipsum3', selected: false },
    { name: 'Lorem Ipsum4', selected: false },
    { name: 'Lorem Ipsum5', selected: false },
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
