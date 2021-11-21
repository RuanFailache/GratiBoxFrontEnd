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

export const SignatureOptionsStyle = styled.section`
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, 1);

  & > img {
    width: 100%;
  }

  & > ul {
    display: flex;
    flex-flow: nowrap column;
    gap: 7.5px;
    padding: 30px;
  }
`;

export const SignatureOptionStyle = styled.li`
  height: ${(props) => props.height};
  padding: 15px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  background-color: hsla(272, 44%, 87%, .62);
  color: hsla(224, 37%, 48%, 1);
  transition: .6s;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SignatureFlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15px;
`;

export const SignatureBoxOptionsStyle = styled.form`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  gap: 7.5px;
  margin-top: 15px;
  font-weight: 300;
`;

export const SignatureCheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75px;
`;

export const SignatureControlsStyle = styled.section`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SignatureDescriptionStyle = styled.p`
  display: block;
  padding: 0 30px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  color: hsla(224, 37%, 48%, 1);
`;
