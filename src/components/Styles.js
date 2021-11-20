import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 325px;
  margin: 0 auto;
  position: relative;
`;

export const TitleStyle = styled.header`
  margin-top: 51px;
  margin-bottom: 45px;

  & > h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: hsla(0, 0%, 100%, 1);
  }

  & > strong {
    display: block;
    margin: 7.5px auto 0;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    text-align: center;
    color: hsla(0, 0%, 100%, 1);
  }
`;

export const LinkStyle = styled.button`
  display: block;
  width: 200px;
  margin: 15px auto 60px;
  border: none;
  background-color: transparent;

  & > a {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 1);
    text-decoration: none;
  }
`;

export const FilledButtonStyle = styled.button`
  display: grid;
  place-items: center;
  width: 200px;
  height: 45px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  background-color: hsla(233, 69%, 73%, 1);

  &, & > a {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 1);
    text-decoration: none;
  }
`;
