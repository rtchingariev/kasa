import BannerAbout from '../../components/Banner/about';
import styled from 'styled-components';

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
`;

const ListUl = styled.ul`
  margin-left: 0;
  margin-bottom: 50px;
`;

const List = styled.li`
  display: block;
  background: #ff6060;
  height: 30px;
  width: 1020px;
  border-radius: 5px;
  margin: 5px 0 30px;
  padding: 10px;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
`;

function About() {
  return (
    <>
      <BannerAbout />
      <AboutContent>
        <ListUl>
          <List>Fiabilité</List>
          <List>Respect</List>
          <List>Service</List>
          <List>Sécurité</List>
        </ListUl>
      </AboutContent>
    </>
  );
}

export default About;
