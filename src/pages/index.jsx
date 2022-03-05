import Image from "next/image"
import Link from "next/link";
import { GlobalStyles, LocationStyledContainer, HomeTitleContainer, HomeCardContainer, HomeContainerStyled, HomeCardLastContainer } from "../styles"
import { BsFillGeoAltFill } from 'react-icons/bs';
import { Banner, SearchBar, Card, BottomNav } from "../components";

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
      <HomeTitleContainer>
        <h3>{`Exclusive Offer`}</h3>
        <Link href="#" >See all</Link>
      </HomeTitleContainer>
      <HomeCardContainer>
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Organic Bananas" description="7pcs, Priceg" src="/banana.png" width={99.89} height={79.43} price="$4.99" />
      </HomeCardContainer>
      <HomeTitleContainer>
        <h3>Best Selling</h3>
        <Link href="#" >See all</Link>
      </HomeTitleContainer>
      <HomeCardContainer>
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
      </HomeCardContainer>
      <HomeTitleContainer>
        <h3>Groceries</h3>
        <Link href="#" >See all</Link>
      </HomeTitleContainer>
      <HomeCardLastContainer>
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
        <Card title="Red Apple" description="7pcs, Priceg" src="/apple.png" width={99.89} height={79.43} price="$4.99" />
      </HomeCardLastContainer>
      <BottomNav />
    </HomeContainerStyled>
  )
}
