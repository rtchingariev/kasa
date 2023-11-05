// import data from '../../data/logements.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BannerApartment from '../../components/Banner/apartment';

const Apartment = styled.div`
  display: block;
  margin-bottom: 50px;
`;

function Apartement() {
  const { id } = useParams();
  return (
    <>
      <BannerApartment />
      <Apartment>Annonce apartement : {id}</Apartment>
    </>
  );
}

export default Apartement;
