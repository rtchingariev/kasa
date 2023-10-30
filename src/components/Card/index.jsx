import data from '../../data/logements.json';

// import { useParams } from 'react-router-dom';
// function Card() {
// const { idApartment } = useParams();

function Card() {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <div>{item.id}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
