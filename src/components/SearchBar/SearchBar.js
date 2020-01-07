import React from 'react'
import StyledSearchBar from './StyledSearchBar'

const SearchBar = () => {

  return(
    <div>
      <StyledSearchBar>
        <form>
          <input type="search" name="search-by-location" id="search-by-location" placeholder="Search weather by location" />
          <button>Browse</button>
        </form>
      </StyledSearchBar>
    </div>
  )
}

export default SearchBar;
