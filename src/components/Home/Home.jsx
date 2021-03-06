import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerStyle,
  LinkStyle,
  FilledButtonStyle,
  DescriptionStyle,
} from '../Styles';

import {
  HomeTitleStyle,
  BackgroundImageStyle,
  HomeFooterStyle,
} from './HomeStyle';

import backgroundImage from '../../assets/images/meditation_woman.jpg';

const Home = function () {
  return (
    <ContainerStyle>
      <HomeTitleStyle>
        <h1>Bem vindo ao GratiBox</h1>

        <DescriptionStyle>
          <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
        </DescriptionStyle>
      </HomeTitleStyle>

      <HomeFooterStyle>
        <BackgroundImageStyle src={backgroundImage} alt="" />

        <FilledButtonStyle>
          <Link to="/sign-up">Quero começar</Link>
        </FilledButtonStyle>

        <LinkStyle>
          <Link to="/sign-in">Já sou grato</Link>
        </LinkStyle>
      </HomeFooterStyle>
    </ContainerStyle>
  );
};

export default Home;
