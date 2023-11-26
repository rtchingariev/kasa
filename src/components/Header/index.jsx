// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo-header.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const HeaderLogo = styled.img`
  width: 210px;
  height: auto;
  @media (max-width: 375px) {
    width: 145px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  width: 150px;
  height: 34px;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 34px;
  color: #ff6060;
  text-align: right;
  &:hover {
    color: #ff6060;
  }
  &.active {
    text-decoration: underline;
  }

  @media (max-width: 375px) {
    width: auto;
    font-size: 12px;
    text-transform: uppercase;
    margin-left: 10px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="Kasa - Chez vous, partout et ailleurs" />

      <nav>
        <StyledLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </StyledLink>
        <StyledLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
