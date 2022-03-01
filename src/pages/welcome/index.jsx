import { Button } from "../../components";
import { WelcomeStyled, GlobalStyles } from "../../styles";
import Link from "next/link";

const Welcome = () => {
  return (
    <WelcomeStyled>
      <GlobalStyles />
      <h1>Welcome<br />to our store</h1>
      <p>Get your groceries in as fast as one hour</p>
      <Link href='/login' passHref>
        <Button label="Get Started" />
      </Link>
    </WelcomeStyled>
  )
}

export default Welcome;