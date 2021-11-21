import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Signature from './Signature';

import { ContainerStyle, FilledButtonStyle } from '../Styles';

import {
  SignatureDescriptionStyle,
  SignaturePlansStyle,
  SignaturePlanStyle,
} from './SignatureStyle';

import gardenWoman from '../../assets/images/garden_woman.svg';
import bedroomWoman from '../../assets/images/bedroom_woman.svg';

import PlanContext from '../../contexts/PlanContext';

const SignaturePlans = function () {
  const { plan, setPlan } = useContext(PlanContext);

  const navigate = useNavigate();

  const handleButtonClick = (signatureType) => {
    setPlan({
      ...plan,
      type: signatureType,
    });

    navigate('/signature/options');
  };

  return (
    <ContainerStyle>
      <Signature text="Você ainda não assinou um plano, que tal começar agora?" />

      <SignaturePlansStyle>
        <SignaturePlanStyle>
          <img src={gardenWoman} alt="" />
          <SignatureDescriptionStyle>
            Você recebe um box por semana.
            Ideal para quem quer exercer a gratidão todos os dias.
          </SignatureDescriptionStyle>
          <FilledButtonStyle onClick={() => handleButtonClick('semanal')}>
            Assinar
          </FilledButtonStyle>
        </SignaturePlanStyle>

        <SignaturePlanStyle>
          <img src={bedroomWoman} alt="" />
          <SignatureDescriptionStyle>
            Você recebe um box por mês.
          </SignatureDescriptionStyle>
          <SignatureDescriptionStyle>
            Ideal para quem está começando agora.
          </SignatureDescriptionStyle>
          <FilledButtonStyle onClick={() => handleButtonClick('mensal')}>
            Assinar
          </FilledButtonStyle>
        </SignaturePlanStyle>
      </SignaturePlansStyle>
    </ContainerStyle>
  );
};

export default SignaturePlans;
