import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Categories() {
  return (
    <CategoriesContainer>
      <ul>
        <Slink to={"/"}>Movies</Slink>
        <Slink to={"/series"}>Series</Slink>
      </ul>
    </CategoriesContainer>
  );
}
const CategoriesContainer = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
  }
`;
const Slink = styled(NavLink)`
  margin: 0 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

export default Categories;
