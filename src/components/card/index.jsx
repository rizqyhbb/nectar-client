import Image from "next/image"
import { CardStyled, FigureStyled, PriceStyled } from "../../styles"
import { BsPlusLg } from 'react-icons/bs'

export const Card = ({ title, description, src, width, height, price, onClick }) => {
  return (
    <CardStyled>
      <FigureStyled>
        <Image src={src} alt={title} width={width} height={height}></Image>
      </FigureStyled>
      <p>{title}
        <br />
        <span>{description}</span>
      </p>
      <PriceStyled>
        <h4>{price}</h4>
        <button onClick={onClick}>
          <BsPlusLg />
        </button>
      </PriceStyled>
    </CardStyled>
  )
}
