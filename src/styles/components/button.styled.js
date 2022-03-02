import styled from "styled-components"

export const ButtonStyled = styled.button`
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 19px;
  width: 90%;
  height: 67px;
  color: white;
  cursor: pointer;

  &:active {
    background-color: ${({ activeBgColor }) => activeBgColor};
  }
`