import starInactive from '../../assets/images/star-inactive.png';
import starActive from '../../assets/images/star-active.png';

function Rate() {
  return (
    <div style={{ marginTop: '15px' }}>
      <img src={starActive} alt="star active" />
      <img src={starActive} alt="star active" />
      <img src={starActive} alt="star active" />
      <img src={starActive} alt="star active" />
      <img src={starInactive} alt="star inactive" />
    </div>
  );
}

export default Rate;
