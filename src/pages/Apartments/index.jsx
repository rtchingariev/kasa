import data from '../../data/logements.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import BannerApartment from '../../components/Banner/apartment';
import Rating from '../../components/Rating/index';
import { Carousel } from '../../components/Carousel';
import React from 'react';
// import { createElement } from 'react';

const AppWrapper = styled.div`
  display: block;
  margin-bottom: 50px;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const AppHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppHeaderLeftTitle = styled.div`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff6060;
  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const AppHeaderLeftLocation = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff6060;
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const AppHeaderLeftTags = styled.span`
  display: inline-block;
  min-width: 100px;
  text-align: center;
  padding: 5px 20px;
  margin: 20px 5px 0 0;
  background: #ff6060;
  border-radius: 10px;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 375px) {
    min-width: 80px;
    font-size: 10px;
    padding: 5px;
    margin: 10px 5px 0 0;
  }
`;

const AppHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 10px;
  }
`;

const AppHeaderRightName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-align: right;
  color: #ff6060;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const AppHeaderRightImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`;

const AppHeaderRightRaiting = styled.div`
  width: auto;
`;

const AppMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 30px 0;
  padding: 0;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const AppMainLeft = styled.div`
  display: inline-block;
  width: 580px;
  background: #ff6060;
  border-radius: 10px;
  @media (max-width: 375px) {
    width: 340px;
    margin-bottom: 15px;
  }
`;

const AppMainRight = styled.div`
  display: inline-block;
  width: 580px;
  background: #ff6060;
  border-radius: 10px;
  @media (max-width: 375px) {
    width: 340px;
  }
`;

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

function Apartement() {
  const { id } = useParams();
  const ApartmentData = data.find((item) => item.id === id);

  return (
    <>
      {/* <BannerApartment /> */}
      <Carousel />
      <AppWrapper>
        <AppHeader>
          <AppHeaderLeft>
            <AppHeaderLeftTitle>{ApartmentData.title}</AppHeaderLeftTitle>
            <AppHeaderLeftLocation>
              {ApartmentData.location}
            </AppHeaderLeftLocation>
            <div>
              {ApartmentData.tags.map((tag) => (
                <AppHeaderLeftTags>{tag}</AppHeaderLeftTags>
              ))}
            </div>
          </AppHeaderLeft>

          <AppHeaderRight>
            <AppHeaderRightName>
              <div style={{ width: '100px', marginRight: '10px' }}>
                {ApartmentData.host.name}
              </div>
              <div>
                <AppHeaderRightImg
                  src={ApartmentData.host.picture}
                  alt={ApartmentData.host.name}
                />
              </div>
            </AppHeaderRightName>

            <AppHeaderRightRaiting>
              <Rating rating={ApartmentData.rating} />
            </AppHeaderRightRaiting>
          </AppHeaderRight>
        </AppHeader>

        <AppMain>
          <AppMainLeft>
            <Accordion title="Description">
              {ApartmentData.description}
            </Accordion>
          </AppMainLeft>
          <AppMainRight>
            <Accordion title="Equipements">
              {ApartmentData.equipments.map((equipments) => (
                <ul>
                  <li>{equipments}</li>
                </ul>
              ))}
            </Accordion>
          </AppMainRight>
        </AppMain>
      </AppWrapper>
    </>
  );
}

export default Apartement;
