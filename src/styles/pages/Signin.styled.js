import styled from "styled-components";

export const SigninStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;

    h3 {
      width: 90%;
    }

    a {
      text-decoration: underline;
      color: blue;
    }

    Button {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 20px;
        font-size: 24px;
      }
    }
`

export const FormStyled = styled.form`
  width: 90%;
  margin-bottom: 16px;
`
export const PasswordContainerStyled = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    border-bottom: 1px solid black;
    color: grey
  }
`
export const ImageStyled = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-227px, -184.4px) rotate(218.71deg);
    width: 927.35px;
    z-index: -1;
`