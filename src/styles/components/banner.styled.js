import styled from "styled-components";

export const BannerStyled = styled.div`
  width: 90%;
  height: 115px;
  border-radius: 8px;
  background-color: black ;
`

export const RadioContainerStyled = styled.div`
  height: 100%;
  padding-bottom: 8px ;
  display:flex ;
  justify-content: center;
  align-items: end ;

  input{
    display: none;
  }

  label {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: grey;
    margin:0 4px ;
    display: block;
    transition: width 0.3s;
  }

  input:checked + label {
    transition: width 0.3s;
    width: 20px;
    background-color: rgba(83, 177, 117, 1);
  }
`