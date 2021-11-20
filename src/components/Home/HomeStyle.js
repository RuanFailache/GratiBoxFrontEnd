import styled from 'styled-components';

export const HomeFilledButtonStyle = styled.button`
  display: grid;
  place-items: center;
  width: 200px;
  height: 45px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  background-color: hsla(233, 69%, 73%, 1);

  & > a {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 1);
    text-decoration: none;
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

export const HomeLinkStyle = styled.button`
  display: block;
  width: 120px;
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
`;

export const BackgroundImageStyle = styled.img`
  display: block;
  width: 100%;
`;
