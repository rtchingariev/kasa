import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContent = styled.div`
  display: block;
  width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #ff6060;
`;

const ErrorTitle = styled.h1`
  font-family: Montserrat;
  font-size: 288px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const ErrorMessage = styled.div`
  display: block;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  margin-bottom: 50px;
`;

const GoHome = styled(Link)`
  display: inline-block;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 50px;
  &:hover {
    color: #ff6060;
    text-decoration: underline;
  }
  &:visited {
    color: #ff6060;
  }
`;

function Error() {
  return (
    <ErrorContent>
      <ErrorTitle>404</ErrorTitle>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <GoHome to={'/'}>Retourner sur la page d’accueil</GoHome>
    </ErrorContent>
  );
}

export default Error;
