import { NavLink } from "react-router-dom";
import styled from "styled-components";

function SubCategories() {
  return (
    <CategoriesContainer>
      <ul>
        <Slink to={"/categories/Top250Movies"}>Top Rated</Slink>
        <Slink to={"/categories/MostPopularMovies"}>Most Popular</Slink>
        <Slink to={"/categories/InTheaters"}>In Theatres</Slink>
        <Slink to={"/categories/ComingSoon"}>Coming Soon</Slink>
        <Slink to={"/categories/BoxOffice"}>Box Office</Slink>
      </ul>
      <hr />
    </CategoriesContainer>
  );
}
const CategoriesContainer = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
  }
  hr {
    margin-bottom: 3rem;
    width: 90%;
    display: block;
    border-style: inset;
  }
`;
const Slink = styled(NavLink)`
  margin: 0 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  background-color: #c6c0c0;
  padding: 0.3rem;
  border-radius: 0.5rem;

  :hover {
    background-color: blue;
    color: white;
  }
  :active {
    background-color: blue;
    color: white;
  }
`;

export default SubCategories;
