import BannerAbout from '../../components/Banner/about';
import styled from 'styled-components';
import { useState } from 'react';
import '../../App.css';
const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
`;

// const ListUl = styled.ul`
//   margin-left: 0;
//   margin-bottom: 50px;
// `;

// const List = styled.li`
//   display: block;
//   background: #ff6060;
//   height: 30px;
//   width: 1020px;
//   border-radius: 5px;
//   margin: 5px 0 30px;
//   padding: 10px;
//   color: #fff;
//   font-family: Montserrat;
//   font-size: 24px;
//   font-weight: 500;
//   line-height: 30px;
//   text-align: left;
// `;

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

function About() {
  return (
    <>
      <BannerAbout />
      <AboutContent>
        <div className="wrapper">
          <Accordion title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Accordion>
          <Accordion title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Accordion>
          <Accordion title="Service">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Accordion>
          <Accordion title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </Accordion>
        </div>
      </AboutContent>
    </>
  );
}

export default About;
