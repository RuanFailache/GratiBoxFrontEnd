import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerStyle,
  LinkStyle,
  TitleStyle,
  FilledButtonStyle,
} from '../Styles';

import {
  LoginFormStyle,
  LoginInputStyle,
  LoginFooterStyle,
} from './LoginStyles';

import { checkUserToSignIn } from '../../services/api';

const SignIn = function ({ setUserInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const result = await checkUserToSignIn({
        email,
        password,
      });
      console.log(result.data);
      return setUserInfo({ ...result.data });
    } catch (err) {
      return err;
    }
  };

  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>Bem vindo ao GratiBox</h1>
      </TitleStyle>

      <LoginFormStyle onSubmit={handleSubmitForm}>
        <LoginInputStyle value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <LoginInputStyle value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />

        <LoginFooterStyle>
          <FilledButtonStyle>Entrar</FilledButtonStyle>

          <LinkStyle>
            <Link to="/sign-up">Ainda não sou grato</Link>
          </LinkStyle>
        </LoginFooterStyle>
      </LoginFormStyle>
    </ContainerStyle>
  );
};

export default SignIn;
