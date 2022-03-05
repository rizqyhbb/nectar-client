import { BottomNavStyled } from "../../styles";
import { BsShop, BsCart3, BsHeart, BsPersonCircle, BsSearch } from "react-icons/bs"
import { BottomNavInputStyled, BottomNavLabelStyled } from "../../styles";

export const BottomNav = () => {
  return (
    <BottomNavStyled>
      <BottomNavInputStyled type="radio" name="bottomNav" id="shop" defaultChecked />
      <BottomNavLabelStyled htmlFor="shop">
        <BsShop />
        <p>Shop</p>
      </BottomNavLabelStyled>
      <BottomNavInputStyled type="radio" name="bottomNav" id="explore" />
      <BottomNavLabelStyled htmlFor="explore">
        <BsSearch />
        <p>Explore</p>
      </BottomNavLabelStyled>
      <BottomNavInputStyled type="radio" name="bottomNav" id="cart" />
      <BottomNavLabelStyled htmlFor="cart">
        <BsCart3 />
        <p>Cart</p>
      </BottomNavLabelStyled>
      <BottomNavInputStyled type="radio" name="bottomNav" id="favourite" />
      <BottomNavLabelStyled htmlFor="favourite">
        <BsHeart />
        <p>Favourite</p>
      </BottomNavLabelStyled>
      <BottomNavInputStyled type="radio" name="bottomNav" id="account" />
      <BottomNavLabelStyled htmlFor="account">
        <BsPersonCircle />
        <p>Account</p>
      </BottomNavLabelStyled>
    </BottomNavStyled>
  )
}
