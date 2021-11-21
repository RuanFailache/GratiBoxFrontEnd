import React, { useContext } from 'react';

import useCheckAuth from '../../hooks/useCheckAuth';

import {
  DescriptionStyle,
  TitleStyle,
} from '../Styles';

import UserContext from '../../contexts/UserContext';

const Signature = function ({ text }) {
  const { userInfo } = useContext(UserContext);

  const isAuthorized = useCheckAuth(userInfo);

  return (
    <TitleStyle>
      <h1>
        Bom te ver por aqui, @
        {isAuthorized ? userInfo.user.name : ''}
        .
      </h1>

      <DescriptionStyle>
        {text}
      </DescriptionStyle>
    </TitleStyle>
  );
};

export default Signature;
