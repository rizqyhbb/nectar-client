import styled from "styled-components";

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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

export const HomeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  a {
      text-decoration: none;
      color: rgba(83,177,117,1);
      font-weight: bold ;
    }
`

export const HomeCardContainer = styled.div`
  display: flex;
  overflow: auto;
  margin: 16px 0 ;
  width: 100%;
`
export const HomeCardLastContainer = styled(HomeCardContainer)`
  margin-bottom: 108px;
`

export const HomeLogoContainer = styled.div`
  margin-top: 56px;
`