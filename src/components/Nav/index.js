import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch, MdPerson, MdShoppingCart, MdMenu } from 'react-icons/md';

import { Container, NavLinkList, NavLink, ActionConatiner } from './styles';

import api from '../../services/api';

import Cart from '../Cart';

import logo from '../../assets/logo/agencia-eplus-n-logo.png';

export default function Nav({ history, navLinksData }) {
  const [navLinks, setNavLinks] = useState(navLinksData);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    async function loadProductsData() {
      const response = await api.get('products.json');

      if (response.data.cart.item.length > 0) {
        setProducts(response.data.cart.item);
      }
    }

    loadProductsData();
  }, []);

  function handleChangeLink(link) {
    const selected = navLinks.map(sec => {
      const s = { name: sec.name, selected: sec.name === link };
      return s;
    });

    setNavLinks(selected);
    setNavOpen(false);
    const formatedLink = link.replace(' ', '-').toLowerCase();
    history.push(`/${formatedLink}`);
  }

  return (
    <Container>
      <div className="nav-content">
        <button
          className="home-btn"
          type="button"
          onClick={() => handleChangeLink('')}
        >
          <div className="crop">
            <img src={logo} alt="Logo" />
          </div>
        </button>
        <NavLinkList open={navOpen}>
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

          <button
            type="button"
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
          >
            <MdShoppingCart size={30} />
          </button>

          <button
            type="button"
            className="nav-btn"
            onClick={() => setNavOpen(!navOpen)}
          >
            <MdMenu size={30} color="#00ba16" />
          </button>
        </ActionConatiner>
        {showCart && <Cart productsData={products} />}
      </div>
    </Container>
  );
}

Nav.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  navLinksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      selected: PropTypes.bool,
    })
  ).isRequired,
};
