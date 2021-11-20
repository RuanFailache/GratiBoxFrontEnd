import styled from 'styled-components';

export const LoginFormStyle = styled.form`
  display: flex;
  flex-flow: nowrap column;
  width: 100%;
  gap: 7.5px;
`;

export const LoginInputStyle = styled.input`
  display: block;
  width: 100%;
  height: 64px;
  padding: 15px;
  font-size: 20px;
  line-height: 24px;
  background-color: hsla(0, 0%, 100%, 1);
  border: solid 1px hsla(0, 14%, 33%, 1);
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
`;

export const LoginFooterStyle = styled.footer`
  display: block;
  position: fixed;
  width: 200px;
  left: calc((100% - 200px) / 2);
  bottom: 120px;
`;
