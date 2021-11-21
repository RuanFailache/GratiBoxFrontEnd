import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

import UserContext from '../../contexts/UserContext';

const SignIn = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const result = await checkUserToSignIn({
        email,
        password,
      });

      setUserInfo({ ...result.data });
      return navigate('/signature');
    } catch (err) {
      const { status } = err.response;

      if (status === 400) {
        return setMessage('Dados inseridos inválidos! O email deve ser no formato xxx@xxx.com e a senha deve possuir ao menos 6 digitos.');
      } if (status === 404) {
        return setMessage('Email e/ou senhas inseridos inválidos!');
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
