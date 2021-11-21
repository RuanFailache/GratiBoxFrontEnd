import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import PlanContext from '../../contexts/PlanContext';

const SignatureOptions = function () {
  const [isDeliverySelected, setIsDeliverySelected] = useState(true);
  const [isReceiveSelected, setIsReceiveSelected] = useState(false);

  const { plan } = useContext(PlanContext);

  const navigate = useNavigate();

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
            options={plan.type === 'semanal' ? ['Segunda', 'Quarta', 'Sexta'] : ['Dia 01', 'Dia 10', 'Dia 20']}
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
        <FilledButtonStyle onClick={() => navigate(-1)}>Anterior</FilledButtonStyle>
        <FilledButtonStyle>Proximo</FilledButtonStyle>
      </SignatureControlsStyle>
    </ContainerStyle>
  );
};

export default SignatureOptions;
