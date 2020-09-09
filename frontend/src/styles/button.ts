import styled from 'styled-components';

interface Props {
  variant?: 'primary' | 'dark' | 'default';
}

const Button = styled.button<Props>`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return 'rgb(0,149,246)';
      case 'dark':
        return '#333333';
      case 'default':
        return '#ffffff';
      default:
        return 'rgb(0,149,246)';
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'primary' || 'dark':
        return props.theme.colors.darkText;
      case 'default':
        return props.theme.colors.text;
      default:
        return props.theme.colors.darkText;
    }
  }};
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  margin: 5px 0px;
`;
export default Button;
