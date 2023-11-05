import styled from 'styled-components';
import banner from '../../assets/images/banner-about.png';

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

function Banner() {
  return <HeroBanner></HeroBanner>;
}

export default Banner;
