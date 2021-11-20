import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerStyle,
  TitleStyle,
  FilledButtonStyle,
  LinkStyle,
} from '../Styles';

import {
  LoginFormStyle,
  LoginInputStyle,
  LoginFooterStyle,
} from './LoginStyles';

import { registerNewUser } from '../../services/api';

const SignUp = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      return setMessage('A senha deve conter ao menos 6 digitos');
    }

    if (password !== confirmPassword) {
      return setMessage('A senha de confirmação está diferente da senha colocada!');
    }
    try {
      await registerNewUser({
        name,
        email,
        password,
      });

      return setMessage('Cadastro efetuado com sucesso!');
    } catch (err) {
      const { status } = err.response;

      if (status === 400) {
        return setMessage('Dados inseridos inválidos! O email deve ser no formato xxx@xxx.com e a senha deve possuir simblos, números e letras maiusculas e minusculas.');
      } if (status === 404) {
        return setMessage('Dados inseridos inválidos! Digite um nome ou email válidos.');
      }
      return setMessage('Houve algum erro interno! Contate o suporte.');
    }
  };

  return (
    <ContainerStyle>
      <TitleStyle>
        <h1>Bem vindo ao GratiBox</h1>
        {message !== '' ? <strong>{message}</strong> : null}
      </TitleStyle>

      <LoginFormStyle onSubmit={handleSubmitForm}>
        <LoginInputStyle value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" />
        <LoginInputStyle value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <LoginInputStyle value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
        <LoginInputStyle value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme senha" />

        <LoginFooterStyle>
          <FilledButtonStyle type="submit">Cadastrar</FilledButtonStyle>

          <LinkStyle>
            <Link to="/sign-in">Já sou grato</Link>
          </LinkStyle>
        </LoginFooterStyle>
      </LoginFormStyle>
    </ContainerStyle>
  );
};

export default SignUp;
