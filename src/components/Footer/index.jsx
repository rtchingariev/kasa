import styled from 'styled-components';
import logoFooter from '../../assets/images/logo-footer.png';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 200px;
  padding: 30px 0;
  margin: 0;
  background: #000;
  color: #fff;
`;
const FooterLogo = styled.img`
  margin: 50px 0 30px 0;
  width: 122px;
`;

const FooterCopyright = styled.span`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  @media (max-width: 375px) {
    width: 135px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logoFooter} alt="Kasa - footer" />
      <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
