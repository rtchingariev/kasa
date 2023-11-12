import { Link } from 'react-router-dom';
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 150px;
  height: 34px;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 34px;
  color: #ff6060;
  &:hover {
    color: #ff6060;
  }
  &.active {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="Kasa - Chez vous, partout et ailleurs" />

      <nav>
        <StyledLink to="/" className="active">
          Accueil
        </StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
