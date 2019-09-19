import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch, MdPerson, MdShoppingCart } from 'react-icons/md';

import { Container, NavLinkList, NavLink, ActionConatiner } from './styles';

import Cart from '../Cart';

import logo from '../../assets/logo/agencia-eplus-n-logo.png';

export default function Nav({ history, navLinksData }) {
  const [navLinks, setNavLinks] = useState(navLinksData);
  const [showCart, setShowCart] = useState(false);

  const productsData = [
    {
      productId: 100,
      name:
        'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.158,21',
      bestPrice: 715821,
      quantity: 1,
      image: 'data/images/products/note01-samsung-160-160.jpg',
    },
    {
      productId: 101,
      name:
        'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.158,21',
      bestPrice: 715821,
      quantity: 1,
      image: 'data/images/products/note01-samsung-160-160.jpg',
    },
    {
      productId: 102,
      name:
        'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.158,21',
      bestPrice: 715821,
      quantity: 1,
      image: 'data/images/products/note01-samsung-160-160.jpg',
    },
    {
      productId: 103,
      name:
        'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.158,21',
      bestPrice: 715821,
      quantity: 1,
      image: 'data/images/products/note01-samsung-160-160.jpg',
    },
  ];

  function handleChangeLink(link) {
    const selected = navLinks.map(sec => {
      const s = { name: sec.name, selected: sec.name === link };
      return s;
    });

    setNavLinks(selected);

    const formatedLink = link.replace(' ', '-').toLowerCase();
    history.push(`/${formatedLink}`);
  }

  function handleCartButton() {
    setShowCart(!showCart);
  }

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
        {showCart && <Cart productsData={productsData} />}
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
