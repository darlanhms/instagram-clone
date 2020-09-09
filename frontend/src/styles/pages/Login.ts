import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image-content form';
  background-color: rgb(250, 250, 250);

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'form';
  }
`;

export const ImageContent = styled.div`
  grid-area: 'image-content';
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media (max-width: 765px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  grid-area: 'form';
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 765px) {
    align-items: center;
  }
`;

export const FormContent = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  padding: 20px 50px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  width: 350px;

  img {
    width: 175px;
    margin-bottom: 20px;
    align-self: center;
  }

  fieldset {
    display: flex;
    align-items: stretch;
    justify-content: center;
    border: none;
  }

  fieldset form {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #4795f6;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    text-align: center;
  }
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 0px;

  .line {
    flex-grow: 1;
    flex-shrink: 1;
    height: 1px;
    background-color: rgb(219, 219, 219);
    position: relative;
  }
  .text {
    font-size: 13px;
    margin: 0px 10px;
    color: rgb(142, 142, 142);
  }
`;
export const ExternalLogin = styled.div`
  color: #385185;
  text-align: center;
  font-weight: 600;
  text-transform: inherit;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: #8095c1;
  }

  svg {
    margin-right: 15px;
  }
  p {
    display: inline-block;
  }
`;

export const ForgotPassword = styled.div`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
`;

export const ObtainApp = styled.div`
  margin-top: 10px;
  font-size: 13px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 20px 0px;
  }

  img {
    height: 40px;
    margin: 5px;
  }
`;
