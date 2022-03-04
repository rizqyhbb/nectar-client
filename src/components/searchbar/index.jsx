import { BsSearch } from 'react-icons/bs';
import { SearchBarStyled } from '../../styles'

export const SearchBar = ({ placeholder }) => {
  return (
    <SearchBarStyled>
      <BsSearch />
      <input type="text" placeholder={placeholder} />
    </SearchBarStyled>

  )
}
