import data from '../../data/logements.json';
import BannerHome from '../../components/Banner/home';

// import { data } from '../../data/data';
import thumb from '../../assets/images/img.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// console.log(data);

const HomeContainer = styled.div`
  display: block;
  background: #f6f6f6;
  max-width: 1240px;
  height: auto;
  padding: 30px 0;
  margin: 30px 0;
  border-radius: 25px;
`;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: auto;
  justify-items: center;
`;

const HomeContent = styled.div`
  background-image: url(${thumb});
  background-size: cover;
  width: 340px;
  height: 340px;
  position: relative;
  margin-bottom: 20px;
  display: block;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 340px;
    border-radius: 10px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0,
      #000 100%
    );
    opacity: 0.5;
  }
`;
const HomeTitle = styled.div`
  position: absolute;
  top: 270px;
  width: 300px;
  padding: 0 20px;
  color: #fff;
  justify-items: left;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  z-index: 2;
`;

function Home() {
  return (
    <>
      <BannerHome />
      <HomeContainer>
        <HomeGrid>
          {data.map((item, i) => (
            <NavLink to={`/card/${item.id}`}>
              <HomeContent key={i}>
                {/* <img src={thumb} className="thumb" alt={item.title} /> */}
                <HomeTitle>{item.title}</HomeTitle>
              </HomeContent>
            </NavLink>
          ))}
        </HomeGrid>
      </HomeContainer>
    </>
  );
}

export default Home;
