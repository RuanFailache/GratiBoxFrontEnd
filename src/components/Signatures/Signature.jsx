import React, { useContext } from 'react';

import useCheckAuth from '../../hooks/useCheckAuth';

import {
  ContainerStyle,
  DescriptionStyle,
  FilledButtonStyle,
  TitleStyle,
} from '../Styles';

import {
  SignatureDescriptionStyle,
  SignaturePlansStyle,
  SignaturePlanStyle,
} from './SignatureStyle';

import gardenWoman from '../../assets/images/garden_woman.svg';
import bedroomWoman from '../../assets/images/bedroom_woman.svg';

import UserContext from '../../contexts/UserContext';

const Signature = function () {
  const { userInfo } = useContext(UserContext);

  const isAuthorized = useCheckAuth(userInfo);

  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>
          Bom te ver por aqui, @
          {isAuthorized ? userInfo.user.name : ''}
          .
        </h1>
      </TitleStyle>

      <DescriptionStyle>
        Você ainda não assinou um plano, que tal começar agora?
      </DescriptionStyle>

      <SignaturePlansStyle>
        <SignaturePlanStyle>
          <img src={gardenWoman} alt="" />
          <SignatureDescriptionStyle>
            Você recebe um box por semana.
            Ideal para quem quer exercer a gratidão todos os dias.
          </SignatureDescriptionStyle>
          <FilledButtonStyle>Assinar</FilledButtonStyle>
        </SignaturePlanStyle>

        <SignaturePlanStyle>
          <img src={bedroomWoman} alt="" />
          <SignatureDescriptionStyle>
            Você recebe um box por mês.
          </SignatureDescriptionStyle>

          <SignatureDescriptionStyle>
            Ideal para quem está começando agora.
          </SignatureDescriptionStyle>
          <FilledButtonStyle>Assinar</FilledButtonStyle>
        </SignaturePlanStyle>
      </SignaturePlansStyle>
    </ContainerStyle>
  );
};

export default Signature;
