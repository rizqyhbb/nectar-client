import { BannerStyled, RadioContainerStyled } from "../../styles"

export const Banner = () => {
  return (
    <BannerStyled>
      <RadioContainerStyled>
        <input type="radio" name="banner-option" id="ops1" />
        <label htmlFor="ops1" />
        <input type="radio" name="banner-option" id="ops2" />
        <label htmlFor="ops2" />
        <input type="radio" name="banner-option" id="ops3" />
        <label htmlFor="ops3" />
      </RadioContainerStyled>
    </BannerStyled>
  )
}
