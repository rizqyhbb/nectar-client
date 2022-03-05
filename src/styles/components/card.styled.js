import styled from "styled-components";

export const CardStyled = styled.div`
    border: 1px solid rgba(226, 226, 226, 1);
    border-radius: 18px;
    width: 173px;
    height: 248px;
    flex-shrink: 0;
    margin-left: 16px ;
    
    p{
      font-weight:bold ;
      color: black;
      padding: 0 8px ;
      span {
        font-size: 12px;
        color: grey;
      }

    }

    button {
      border: none;
      border-radius: 17px;
      background-color: rgba(83,177,117,1);
      color: white;
      width: 45px;
      height: 45px;
      font-size: 17px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:active {
        background-color: rgba(65, 143, 93, 1);
      }
    }
    
`

export const FigureStyled = styled.figure`
  display: flex;
  justify-content: center;
  align-items:center ;
  margin: 24px 0;
  `

export const PriceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-top: 16px;
`