import Image from "next/image"
import Link from "next/link";
import { GlobalStyles, LocationStyledContainer, ExclusiveTitle, ExclusiveCard, HomeContainerStyled } from "../styles"
import { BsFillGeoAltFill } from 'react-icons/bs';
import { Banner, SearchBar, Card } from "../components";

Image

export default function Home() {
  return (
    <HomeContainerStyled>
      <GlobalStyles />
      <Image src="/icon.png" alt="nectar logo" width={26.48} height={30.8} />
      <LocationStyledContainer>
        <BsFillGeoAltFill /><p>Location, Detail Location</p>
      </LocationStyledContainer>
      < SearchBar placeholder="Search Store" />
      <Banner />
      <ExclusiveTitle>
        <h3>{`Exclusive Offer`}</h3>
        <Link href="#" >See all</Link>
      </ExclusiveTitle>
      <ExclusiveCard>
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
      </ExclusiveCard>
    </HomeContainerStyled>
  )
}
