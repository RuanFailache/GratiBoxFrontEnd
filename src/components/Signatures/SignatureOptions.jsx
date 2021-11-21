import React, { useState } from 'react';

import {
  ContainerStyle,
  FilledButtonStyle,
} from '../Styles';

import {
  SignatureControlsStyle,
  SignatureOptionsStyle,
} from './SignatureStyle';

import Signature from './Signature';
import SignatureOption from './SignatureOption';

import woman from '../../assets/images/woman.svg';

const SignatureOptions = function () {
  const [isDeliverySelected, setIsDeliverySelected] = useState(true);
  const [isReceiveSelected, setIsReceiveSelected] = useState(false);

  const handleClick = (box) => {
    if (box === 'delivery') {
      setIsDeliverySelected(true);
      setIsReceiveSelected(false);
    } else if (box === 'receive') {
      setIsDeliverySelected(false);
      setIsReceiveSelected(true);
    }
  };

  return (
    <ContainerStyle>
      <Signature text="Agradecer é arte de atrair coisas boas" />

      <SignatureOptionsStyle>
        <img src={woman} alt="" />
        <ul>
          <SignatureOption
            isSelected={isDeliverySelected}
            handleClick={handleClick}
            options={['Segunda', 'Quarta', 'Sexta']}
            type="delivery"
            title="Entrega"
          />

          <SignatureOption
            isSelected={isReceiveSelected}
            handleClick={handleClick}
            options={['Chá', 'Incenso', 'Produtos organicos']}
            type="receive"
            title="Quero receber"
          />
        </ul>
      </SignatureOptionsStyle>

      <SignatureControlsStyle>
        <FilledButtonStyle>Anterior</FilledButtonStyle>
        <FilledButtonStyle>Proximo</FilledButtonStyle>
      </SignatureControlsStyle>
    </ContainerStyle>
  );
};

export default SignatureOptions;
