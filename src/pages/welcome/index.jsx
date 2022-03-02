import { Button } from "../../components";
import { WelcomeStyled, GlobalStyles } from "../../styles";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <WelcomeStyled>
      <GlobalStyles />
      <h1>Welcome<br />to our store</h1>
      <p>Get your groceries in as fast as one hour</p>
      <Link href='/signin' passHref>
        <Button>
          <h4>Get Started</h4>
        </Button>
      </Link>
    </WelcomeStyled>
  )
}

export default WelcomePage;