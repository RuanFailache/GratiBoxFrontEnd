import styled from 'styled-components';

export const SignaturePlansStyle = styled.ul`
  display: flex;
  flex-flow: nowrap column;
  margin-top: 30px;
  margin-bottom: 60px;
  gap: 30px;
`;

export const SignaturePlanStyle = styled.li`
  display: flex;
  flex-flow: nowrap column;
  gap: 15px;
  background-color: hsla(31, 49%, 80%, 1);
  padding-bottom: 30px;
  border-radius: 25px;

  & > img {
    display: block;
    width: 100%;
  }
`;

export const SignatureDescriptionStyle = styled.p`
  display: block;
  padding: 0 30px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  color: hsla(224, 37%, 48%, 1);
`;
