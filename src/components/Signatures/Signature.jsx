import React, { useContext } from 'react';

import useCheckAuth from '../../hooks/useCheckAuth';

import {
  ContainerStyle,
  DescriptionStyle,
  TitleStyle,
} from '../Styles';

import UserContext from '../../contexts/UserContext';
import SignaturePlans from './SignaturePlans';

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

      <SignaturePlans />
    </ContainerStyle>
  );
};

export default Signature;
