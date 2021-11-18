import styled from 'styled-components';

const HomeFilledButtonStyle = styled.button`
  display: grid;
  place-items: center;
  width: 200px;
  height: 45px;
  position: fixed;
  bottom: 85px;
  left: calc((100% - 200px) / 2);
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

export default HomeFilledButtonStyle;
