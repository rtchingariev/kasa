import '../Carousel/carousel.css';
import data from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import arrowPrev from '../../assets/images/arrow_back.png';
import arrowNext from '../../assets/images/arrow_forward.png';

export const Carousel = () => {
  const { id } = useParams();
  const ApartmentData = data.find((item) => item.id === id);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    // setSlide(slide === ApartmentData.pictures.length ? 0 : slide + 1);
    setSlide((slide + 1) % ApartmentData.pictures.length);
  };

  const prevSlide = () => {
    // setSlide(slide < 0 ? ApartmentData.pictures.length - 1 : slide - 1);
    setSlide(
      (slide + ApartmentData.pictures.length - 1) %
        ApartmentData.pictures.length
    );
  };

  return (
    <div className="carousel">
      <img
        src={arrowPrev}
        onClick={prevSlide}
        alt="back"
        className="arrow arrow-left"
      />
      {ApartmentData.pictures.map((item, id) => (
        <img
          className={slide === id ? 'slide' : 'slide slide-hidden'}
          src={item}
          alt={item}
          key={id}
        />
      ))}

      <img
        src={arrowNext}
        onClick={nextSlide}
        alt="forward"
        className="arrow arrow-right"
      />

      <span className="indicators">
        {slide + 1} / {ApartmentData.pictures.length}
      </span>
    </div>
  );
};
