import styled from 'styled-components';

export const Container = styled.nav`
  min-width: 100vw;
  height: 75px;
  background: #fff;
  position: fixed;
  z-index: 5;

  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.13);

  .nav-content {
    max-width: 1640px;
    margin: 0 auto;
    padding: 0 4rem;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 25.9rem;
      height: 4.8rem;
    }
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;

  li {
    cursor: pointer;
    font-weight: 300;
    padding: 1.5rem 2rem;
  }
`;

export const ActionConatiner = styled.div`
  display: flex;

  div {
    padding: 1.5rem 2.5rem;
  }
`;
