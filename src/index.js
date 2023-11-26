import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/about';
import Header from './components/Header/index';
import Card from './components/Card/index';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 375px) {
    padding: 0 10px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Wrapper>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </Wrapper>
    </Router>
  </React.StrictMode>
);
