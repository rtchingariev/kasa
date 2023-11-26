import starInactive from '../../assets/images/star-inactive.png';
import starActive from '../../assets/images/star-active.png';
import styled from 'styled-components';

const RaitingStars = styled.img`
  width: 36px;
  height: 36px;
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
  }
`;

function Rate({ rating }) {
  const _rating = parseInt(rating);
  const starActiveArray = Array.from({ length: _rating });
  console.log('star active:', starActiveArray);
  const starInactiveArray = Array.from({ length: 5 - _rating });
  return (
    <div>
      {starActiveArray.map((_, index) => (
        <RaitingStars key={index} src={starActive} alt="star active" />
      ))}

      {starInactiveArray.map((_, index) => (
        <RaitingStars key={index} src={starInactive} alt="star inactive" />
      ))}
    </div>
  );
}

export default Rate;
