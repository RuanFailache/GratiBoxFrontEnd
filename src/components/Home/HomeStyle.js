import styled from 'styled-components';

export const HomeTitleStyle = styled.header`
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

export const HomeFooterStyle = styled.footer`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  background-color: hsla(224, 37%, 48%, 1);
`;

export const BackgroundImageStyle = styled.img`
  display: block;
  width: 100%;
`;
