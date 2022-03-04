import Image from "next/image"
import { GlobalStyles, LocationStyledContainer } from "../styles"
import { BsFillGeoAltFill } from 'react-icons/bs';
import { Banner, SearchBar } from "../components";

Image

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Image src="/icon.png" alt="nectar logo" width={26.48} height={30.8} />
      <LocationStyledContainer>
        <BsFillGeoAltFill /><p>Location, Detail Location</p>
      </LocationStyledContainer>
      < SearchBar placeholder="Search Store" />
      <Banner />
    </>
  )
}
