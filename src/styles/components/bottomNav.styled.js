import styled from 'styled-components';

export const BottomNavStyled = styled.nav`
  border-top-left-radius: 16px ;
  border-top-right-radius: 16px ;
  height: 92px;
  width: 100%;
  box-shadow:0 -12px 12px rgba(230, 235, 243, 0.5) ;
  display: flex;
  justify-content:space-between ;
  flex-direction: row;
  padding:0 15px ;
  position: fixed;
  bottom: 0;
  background-color: white;
`

export const BottomNavIconContainer = styled.button`
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: 24px;
    flex-basis: 70px;
    padding: 0;

  p {
    margin: 0;
  }
`