import React from 'react';
import { Link } from 'react-router-dom';

import ContainerStyle from '../CommonStyles/ContainerStyle';
import DescriptionStyle from '../CommonStyles/DescriptionStyle';

import {
  HomeTitleStyle,
  HomeFilledButtonStyle,
  BackgroundImageStyle,
  HomeLinkStyle,
  HomeFooterStyle,
} from './HomeStyle';

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
