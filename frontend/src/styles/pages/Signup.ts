import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.secondary};
  flex-direction: column;

  img {
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.h1`
  color: rgb(142, 142, 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
