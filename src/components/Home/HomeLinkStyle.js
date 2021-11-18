import styled from 'styled-components';

const HomeLinkStyle = styled.button`
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

export default HomeLinkStyle;
