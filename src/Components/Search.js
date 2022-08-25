import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
// import styled from "styled-components";

function Search() {
  return (
    <SearchBar>
      <FormStyle>
        <div>
          <FaSearch />
          <input type="text" placeholder="search ..." />
        </div>
      </FormStyle>
    </SearchBar>
  );
}
const SearchBar = styled.div`
  background-color: blue;
  width: 100%;
`;
const FormStyle = styled.form`
  margin: 0% 35%;
  div {
    width: 100%;
    position: relative;
  }
  input {
    font-size: 1.2rem;
    color: black;
    padding: 1rem 3rem;
    width: 100%;
    border: solid black;
    margin: 1rem 0;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    color: black;
    size: 1rem;
    transform: translate(100%, -50%);
  }
`;
export default Search;
