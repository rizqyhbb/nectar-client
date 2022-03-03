import styled from "styled-components";

export const SignupStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  z-index: 1;

  p:first-of-type {
    width: 90%
  }
  
  h3 {
    width: 90%;
    margin-top: 100px;
  }
`

export const ImageContainer = styled.div`
  background-image:${({ backgroundImage }) => backgroundImage}
`