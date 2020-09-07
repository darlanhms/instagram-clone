import styled from 'styled-components'

const Input = styled.input`
  padding: 5px;
  margin: 3px 0px;
  flex: 1 0 auto;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  border: 1px solid rgb(219, 219, 219);
  background: ${props => props.theme.colors.seconday};
  border-radius: 3px;
  color: rgb(38, 38, 38);
  font-size: 12px;
`

export default Input
