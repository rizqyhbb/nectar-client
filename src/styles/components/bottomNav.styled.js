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
  
  a {
    text-decoration: none ;
  }
  
`

export const BottomNavInputContainer = styled.div`
  text-align: center;
  flex-basis: 70px;
  
  input {
    display: none;

    &:checked + label{
      color: rgba(83,177,117,1);
      
      p {
        color: rgba(83,177,117,1);   
      }
    }
  }

  label {
    
    p {
      margin:0 ;
      }

    svg {
      font-size: 24px;
    }
  }
`