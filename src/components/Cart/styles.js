import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  height: 460px;
  background: #f0f0f0;
  position: absolute;
  top: 75px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 650px) {
    width: 100vw;
  }

  &::after {
    content: '';
    position: absolute;
    right: calc(4rem + 23px);
    bottom: 100%;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #f0f0f0;
    transform: rotate(180deg);
    clear: both;

    @media (max-width: 1410px) {
      right: calc(4rem + 20px);
    }

    @media (max-width: 1230px) {
      right: calc(4rem + 96px);
    }

    @media (max-width: 425px) {
      right: calc(4rem + 50px);
    }
  }

  .product-container {
    height: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-y: scroll;
  }

  .empty-container {
    text-align: center;
    margin-top: 50%;
    padding: 20px 10px;
    p {
      margin-top: 1.5rem;
    }
  }
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #00000011;
  height: 115px;
  margin: 0 15px;
  padding: 15px 0;

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 85px;
    background: #fff;
    border-radius: 4px;

    img {
      width: 85px;
    }
  }

  .product-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    height: 85px;
    justify-content: space-between;
    padding: 10px 0;
    color: #333;

    strong {
      height: 35px;
      font-weight: 300;
      font-size: 1.4rem;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      @media (max-width: 1410px) {
        height: 30px;
      }
    }

    .product-detail {
      display: flex;
      justify-content: space-between;

      small {
        font-weight: 400;
        font-size: 1.5rem;
      }

      span {
        font-size: 1.5rem;
        color: #00ba16;
        font-weight: 700;
      }
    }
  }
`;

export const CloseCartContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .total {
    height: 60px;
    width: 100%;
    background: #e5e5e5;
    color: #565656;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 700;
    }
  }

  button {
    height: 50px;
    width: 100%;
    border: none;
    font-weight: 700;
    background: #00ba16;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;
