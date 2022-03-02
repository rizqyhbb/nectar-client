import { ButtonStyled } from "../../styles"

ButtonStyled

export const Button = ({children, onClick, activeBgColor, bgColor}) => {
  return (
    <ButtonStyled onClick={onClick} activeBgColor={activeBgColor || 'rgba(55, 132, 83, 1)'} bgColor={bgColor || 'rgba(83, 177, 117, 1)'}>
      {children}
    </ButtonStyled>
  )
}