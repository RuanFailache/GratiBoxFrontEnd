import React, { useState } from 'react';

import {
  ContainerStyle,
  TitleStyle,
  FilledButtonStyle,
} from '../Styles';

import {
  LoginFormStyle,
  LoginInputStyle,
  LoginFooterStyle,
} from './LoginStyles';

const SignUp = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return 1;
    }
    return 2;
  };

  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>Bem vindo ao GratiBox</h1>
      </TitleStyle>

      <LoginFormStyle onSubmit={handleSubmitForm}>
        <LoginInputStyle value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" />
        <LoginInputStyle value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <LoginInputStyle value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
        <LoginInputStyle value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme senha" />

        <LoginFooterStyle>
          <FilledButtonStyle type="submit">Cadastrar</FilledButtonStyle>
        </LoginFooterStyle>
      </LoginFormStyle>
    </ContainerStyle>
  );
};

export default SignUp;
