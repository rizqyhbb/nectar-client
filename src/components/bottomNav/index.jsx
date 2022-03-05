import { BottomNavStyled } from "../../styles";
import { BsShop, BsCart3, BsHeart, BsPersonCircle, BsSearch } from "react-icons/bs"
import { BottomNavIconContainer } from "../../styles";

export const BottomNav = () => {
  return (
    <BottomNavStyled>
      <BottomNavIconContainer>
        <BsShop />
        <p>Shop</p>
      </BottomNavIconContainer>
      <BottomNavIconContainer>
        <BsSearch />
        <p>Explore</p>
      </BottomNavIconContainer>
      <BottomNavIconContainer>
        <BsCart3 />
        <p>Cart</p>
      </BottomNavIconContainer>
      <BottomNavIconContainer>
        <BsHeart />
        <p>Favourite</p>
      </BottomNavIconContainer>
      <BottomNavIconContainer>
        <BsPersonCircle />
        <p>Account</p>
      </BottomNavIconContainer>
    </BottomNavStyled>
  )
}
