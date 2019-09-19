import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { Container, ProductItem, CloseCartContainer } from './styles';

export default function Cart({ productsData }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    productsData.map(item => {
      setTotal(total + item.bestPrice / 100);
    });
  }, []);

  return (
    <Container>
      {productsData.length > 0 ? (
        <div className="product-container">
          {productsData.map(product => (
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

      {productsData.length > 0 && (
        <CloseCartContainer>
          <div className="total">
            <span>
              Total do pedido:{' '}
              <strong>
                {' '}
                {total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
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
