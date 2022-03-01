import { ButtonStyled } from "../../styles"

ButtonStyled

export const Button = ({label, onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>
      <h4>{label}</h4>
    </ButtonStyled>
  )
}