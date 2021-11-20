import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FilledButtonStyle } from '../Styles';

import {
  SignatureDescriptionStyle,
  SignaturePlansStyle,
  SignaturePlanStyle,
} from './SignatureStyle';

import gardenWoman from '../../assets/images/garden_woman.svg';
import bedroomWoman from '../../assets/images/bedroom_woman.svg';
import UserContext from '../../contexts/UserContext';

const SignaturePlans = function () {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const handleButtonClick = (signatureType) => {
    const { token, user } = userInfo;

    setUserInfo({
      token,
      user: {
        ...user,
        idPlan: signatureType === 'semanal' ? 1 : 2,
      },
    });

    navigate('/signature/options');
  };

  return (
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
  );
};

export default SignaturePlans;
