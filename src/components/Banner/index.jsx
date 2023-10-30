import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

const HeroBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${banner});
  background-position: center;
  max-width: 1240px;
  height: 230px;
  border-radius: 25px;
  padding: 30px 0;
  margin: 30px 0;
`;

const HeroSlogan = styled.div`
  display: block;
  width: 710px;
  height: 70px;
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #fff;
`;

function Banner() {
  return (
    <HeroBanner>
      <HeroSlogan>Chez vous, partout et ailleurs</HeroSlogan>
    </HeroBanner>
  );
}

export default Banner;
