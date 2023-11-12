import '../Carousel/carousel.css';
import data from '../../data/logements.json';
import { useParams } from 'react-router-dom';

export const Carousel = () => {
  const { id } = useParams();
  const ApartmentImg = data.find((item) => item.id === id);
  return (
    <>
      <img src={ApartmentImg.pictures} alt={ApartmentImg.pictures} key={id} />;
    </>
  );
};
