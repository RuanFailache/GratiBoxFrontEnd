import React from 'react';
import { Link } from 'react-router-dom';

import ContainerStyle from '../CommonStyles/ContainerStyle';
import HomeTitleStyle from './HomeTitleStyle';
import DescriptionStyle from '../CommonStyles/DescriptionStyle';
import HomeFooterStyle from './HomeFooterStyle';
import BackgroundImageStyle from './BackgroundImageStyle';
import HomeFilledButtonStyle from './HomeFilledButtonStyle';
import HomeLinkStyle from './HomeLinkStyle';

import backgroundImage from '../../assets/images/meditation_woman.jpg';

const Home = function () {
  return (
    <ContainerStyle>
      <HomeTitleStyle>
        <h1>Bem vindo ao GratiBox</h1>
      </HomeTitleStyle>

      <DescriptionStyle>
        <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
      </DescriptionStyle>

      <HomeFooterStyle>
        <BackgroundImageStyle src={backgroundImage} alt="" />

        <HomeFilledButtonStyle>
          <Link to="/sign-up">Quero começar</Link>
        </HomeFilledButtonStyle>

        <HomeLinkStyle>
          <Link to="/sign-in">Já sou grato</Link>
        </HomeLinkStyle>
      </HomeFooterStyle>
    </ContainerStyle>
  );
};

export default Home;
