import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch, MdPerson, MdShoppingCart } from 'react-icons/md';

import { Container, NavLinkList, NavLink, ActionConatiner } from './styles';

import logo from '../../assets/logo/agencia-eplus-n-logo.png';

export default function Nav({ history, navLinksData }) {
  const [navLinks, setNavLinks] = useState(navLinksData);

  function handleChangeLink(link) {
    const selected = navLinks.map(sec => {
      const s = { name: sec.name, selected: sec.name === link };
      return s;
    });

    setNavLinks(selected);

    const formatedLink = link.replace(' ', '-').toLowerCase();
    history.push(`/${formatedLink}`);
  }

  function handleCartButton() { }

  return (
    <Container>
      <div className="nav-content">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <NavLinkList>
          {navLinks.map(navLink => (
            <NavLink
              key={navLink.name}
              selected={navLink.selected}
              onClick={() => handleChangeLink(navLink.name)}
            >
              {navLink.name}
            </NavLink>
          ))}
        </NavLinkList>
        <ActionConatiner>
          <button type="button" className="search-btn">
            <MdSearch size={30} />
          </button>

          <button type="button" className="profile-btn">
            <MdPerson size={30} />
          </button>

          <button type="button" className="cart-btn" onClick={handleCartButton}>
            <MdShoppingCart size={30} />
          </button>
        </ActionConatiner>
      </div>
    </Container>
  );
}

Nav.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  navLinksData: PropTypes.instanceOf(Array).isRequired,
};
