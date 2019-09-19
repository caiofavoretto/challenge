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

      cursor: pointer;
    }
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.li`
  cursor: pointer;
  font-weight: ${props => (props.selected ? 700 : 300)};
  margin: 1.5rem 2rem;
  color: ${props => (props.selected ? '#00ba16' : '#333')};

  &:hover {
    color: #00ba16;
  }
`;

export const ActionConatiner = styled.div`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 2rem;
    border: none;
    background: none;
    border-radius: 50%;
    padding: 0.8rem;

    &:hover {
      background: #00000011;
    }
  }
`;
