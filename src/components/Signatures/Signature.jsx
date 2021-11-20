import React, { useEffect, useState } from 'react';

import useCheckAuth from '../../hooks/useCheckAuth';

import { ContainerStyle, TitleStyle } from '../Styles';

const Signature = function ({ userInfo }) {
  const [name, setName] = useState('');
  const isAuthorized = useCheckAuth(userInfo);

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      if (isAuthorized) {
        setName(userInfo.user.name);
      }
    }

    return () => {
      isActive = false;
    };
  }, [userInfo]);

  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>
          Bom te ver por aqui, @
          {name}
          .
        </h1>
      </TitleStyle>
    </ContainerStyle>
  );
};

export default Signature;
