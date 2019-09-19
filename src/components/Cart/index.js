import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { Container, ProductItem, CloseCartContainer } from './styles';

export default function Cart({ productsData }) {
  const [products, setProducts] = useState(productsData);

  return (
    <Container>
      {products.length > 0 ? (
        <div className="product-container">
          {products.map(product => (
            <ProductItem key={product.productId}>
              <picture>
                <img src={product.image} alt={product.name} />
              </picture>
              <div className="product-info">
                <strong>{product.name}</strong>
                <div className="product-detail">
                  <small>Qtd.: {product.quantity}</small>
                  <span>{product.bestPriceFormated}</span>
                </div>
              </div>
            </ProductItem>
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <MdRemoveShoppingCart size={25} color="#00ba16" />
          <p>Você ainda não possui nenhum item no carrinho.</p>
        </div>
      )}

      {products.length > 0 && (
        <CloseCartContainer>
          <div className="total">
            <span>
              Total do pedido: <strong>R$ 20.356,95</strong>
            </span>
          </div>
          <button type="button">FINALIZAR COMPRA</button>
        </CloseCartContainer>
      )}
    </Container>
  );
}

Cart.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      name: PropTypes.string,
      salesChannel: PropTypes.string,
      available: PropTypes.bool,
      bestPriceFormated: PropTypes.string,
      bestPrice: PropTypes.number,
      quantity: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
};
