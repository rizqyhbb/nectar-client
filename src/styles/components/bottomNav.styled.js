import styled from 'styled-components';

export const BottomNavStyled = styled.nav`
  border-top-left-radius: 16px ;
  border-top-right-radius: 16px ;
  height: 92px;
  width: 100%;
  box-shadow:0 -12px 12px rgba(230, 235, 243, 0.5) ;
  display: flex;
  justify-content:space-between ;
  align-items:center ;
  flex-direction: row;
  padding:0 15px ;
  position: fixed;
  bottom: 0;
  background-color: white;
  flex-basis: 60px;
`

export const BottomNavInputStyled = styled.input`
   display: none;

   &:checked + label{
     p {
      color: rgba(83,177,117,1);   
     }
    color: rgba(83,177,117,1);
   }
`

export const BottomNavLabelStyled = styled.label`
  flex-basis: 70px;
  text-align: center;
  p {
    margin:0 ;
    }

  svg {
    font-size: 24px;
  }
`