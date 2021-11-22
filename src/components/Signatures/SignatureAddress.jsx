import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ContainerStyle,
  FilledButtonStyle,
} from '../Styles';

import {
  SignatureControlsStyle,
  SignatureFormStyle,
  SignatureInputTextStyle,
  SignatureOptionsStyle,
} from './SignatureStyle';

import Signature from './Signature';

import woman from '../../assets/images/woman.svg';

import PlanContext from '../../contexts/PlanContext';

import { registerNewPlan } from '../../services/api';
import UserContext from '../../contexts/UserContext';

const SignatureAddress = function () {
  const [fullname, setFullname] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('"Agradecer é arte de atrair coisas boas"');

  const { userInfo } = useContext(UserContext);
  const { plan } = useContext(PlanContext);

  const navigate = useNavigate();

  const finishRegisterPlan = async () => {
    try {
      await registerNewPlan({
        plan,
        userInfo: {
          fullname,
          address: {
            street,
            number,
            zipCode,
            city,
            state,
          },
        },
      }, userInfo.token);

      navigate('/');
    } catch (err) {
      const { status } = err.response;

      if (status === 400) {
        setMessage('Dados de endereço preenchidos invalidos!');
      } else if (status === 401) {
        navigate('/sign-in');
      }
    }
  };

  return (
    <ContainerStyle>
      <Signature text={message} />

      <SignatureOptionsStyle>
        <img src={woman} alt="" />

        <SignatureFormStyle>
          <SignatureInputTextStyle value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Nome completo" />
          <SignatureInputTextStyle type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="CEP" />
          <SignatureInputTextStyle value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rua" />
          <SignatureInputTextStyle type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="N°" />
          <SignatureInputTextStyle value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
          <SignatureInputTextStyle value={state} onChange={(e) => setState(e.target.value)} placeholder="UF" />
        </SignatureFormStyle>
      </SignatureOptionsStyle>

      <SignatureControlsStyle>
        <FilledButtonStyle onClick={() => navigate(-1)}>Anterior</FilledButtonStyle>
        <FilledButtonStyle
          disabled={
            fullname === ''
            || zipCode === ''
            || street === ''
            || number === ''
            || city === ''
            || state === ''
          }
          onClick={finishRegisterPlan}
        >
          Finalizar
        </FilledButtonStyle>
      </SignatureControlsStyle>
    </ContainerStyle>
  );
};

export default SignatureAddress;
