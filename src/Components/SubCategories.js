import styled from "styled-components";
import { NavLink } from "react-router-dom";

function SubCategories() {
  return (
    <SubCategoriesContainer>
      <ul>
        <Slink to={"/top rated"}>Top Rated</Slink>
        <Slink to={"/coming soon"}>Coming Soon</Slink>
        <Slink to={"/most popular movies"}>Most Popular Movies</Slink>
        <Slink to={"/in theatres"}>In Theatres</Slink>
      </ul>
    </SubCategoriesContainer>
  );
}
const SubCategoriesContainer = styled.div``;
const Slink = styled(NavLink)`
  margin: 0 2rem;
  text-decoration: none;
  color: black;
  background-color: grey;
  border: solid grey;
  padding: 0.5rem;
  border-radius: 2rem;
  :hover {
  }
`;
export default SubCategories;
