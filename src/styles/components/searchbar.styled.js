import styled from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;

  svg {
    position: fixed;
    margin: 0px 16px;
    font-size: 20px;
  }

  input {
    border-radius:15px ;
    border: none;
    background-color: rgba(242, 243, 242, 1);
    padding: 0px 16px 0px 44px;
    height: 51px ;
    font-size: 16px;
    width: 90%;
  }
`