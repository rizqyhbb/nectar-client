import styled from "styled-components"

export const ImageStyled = styled.img`
    position: ${({ position }) => position};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    transform: ${({ transform }) => transform};
    width: ${({ width }) => width};
    z-index: ${({ zIndex }) => zIndex};
`
export const ImageContainerStyled = styled.div`
  background-image:${({ backgroundImage }) => backgroundImage};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};
`
