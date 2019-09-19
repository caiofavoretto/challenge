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
    position: relative;

    @media (max-width: 425px) {
      padding: 0 15px;
    }

    .home-btn {
      border: none;
      background: none;
    }

    .crop {
      @media (max-width: 650px) {
        height: 40px;
        width: 40px;
        overflow: hidden;
      }
    }

    img {
      height: 4.8rem;

      cursor: pointer;
    }
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 1230px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffee;
    z-index: 2;
  }
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

  .nav-btn {
    display: none;

    @media (max-width: 1230px) {
      display: block;
      z-index: 3;
    }
  }

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
      background: #f0f0f0;
    }

    @media (max-width: 425px) {
      margin: 1.5rem 8px;
    }
  }
`;
