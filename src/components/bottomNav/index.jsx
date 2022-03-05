import { BottomNavStyled } from "../../styles";
import { BsShop, BsCart3, BsHeart, BsPersonCircle, BsSearch } from "react-icons/bs"
import { BottomNavInputContainer } from "../../styles";
import Link from "next/link";

export const BottomNav = () => {
  return (
    <BottomNavStyled>
      <Link href="/" passHref>
        <BottomNavInputContainer>
          <input type="radio" name="bottomNav" id="shop" defaultChecked />
          <label htmlFor="shop">
            <BsShop />
            <p>Shop</p>
          </label>
        </BottomNavInputContainer>
      </Link>
      <Link href="/explore" passHref>
        <BottomNavInputContainer>
          <input type="radio" name="bottomNav" id="explore" />
          <label htmlFor="explore">
            <BsSearch />
            <p>Explore</p>
          </label>
        </BottomNavInputContainer>
      </Link>
      <Link href="/cart" passHref>
        <BottomNavInputContainer>
          <input type="radio" name="bottomNav" id="cart" />
          <label htmlFor="cart">
            <BsCart3 />
            <p>Cart</p>
          </label>
        </BottomNavInputContainer>
      </Link>
      <Link href="/favourite" passHref>
        <BottomNavInputContainer>
          <input type="radio" name="bottomNav" id="favourite" />
          <label htmlFor="favourite">
            <BsHeart />
            <p>Favourite</p>
          </label>
        </BottomNavInputContainer>
      </Link>
      <Link href="/account" passHref>
        <BottomNavInputContainer>
          <input type="radio" name="bottomNav" id="account" />
          <label htmlFor="account">
            <BsPersonCircle />
            <p>Account</p>
          </label>
        </BottomNavInputContainer>
      </Link>
    </BottomNavStyled>
  )
}
