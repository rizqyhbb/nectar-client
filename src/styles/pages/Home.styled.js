import styled from "styled-components";

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  Image {
    margin-top: 50px;
  } 
`

export const LocationStyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  svg {
    margin-right: 8px ;
    font-size: 20px;
  }

  p {
    font-weight: bold;
  }
`

export const ExclusiveTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`

export const ExclusiveCard = styled.div`
  display: flex;
  overflow: auto;
  margin: 16px 0 ;
  width: 100%;
`