import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerStyle,
  TitleStyle,
  LinkStyle,
  FilledButtonStyle,
} from '../Styles';

import {
  BackgroundImageStyle,
  HomeFooterStyle,
  HomeDescriptionStyle,
} from './HomeStyle';

import backgroundImage from '../../assets/images/meditation_woman.jpg';

const Home = function () {
  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>Bem vindo ao GratiBox</h1>
      </TitleStyle>

      <HomeDescriptionStyle>
        <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
      </HomeDescriptionStyle>

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
