import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdPerson, MdShoppingCart } from 'react-icons/md';

import { Container, NavLinkList, ActionConatiner } from './styles';

import logo from '../../assets/logo/agencia-eplus-n-logo.png';

export default function Nav({ history, navLinksData }) {
  return (
    <Container>
      <div className="nav-content">
        <img src={logo} alt="Logo" />
        <NavLinkList>
          {navLinksData.map(navLink => (
            <li key={navLink.name}>{navLink.name}</li>
          ))}
        </NavLinkList>
        <ActionConatiner>
          <div className="search-btn">
            <MdSearch size={30} />
          </div>

          <div className="profile-btn">
            <MdPerson size={30} />
          </div>

          <div className="cart-btn">
            <MdShoppingCart size={30} />
          </div>
        </ActionConatiner>
      </div>
    </Container>
  );
}

Nav.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  navLinksData: PropTypes.instanceOf(Array).isRequired,
};
