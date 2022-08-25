import Search from "../Components/Search";
import styled from "styled-components";
import Categories from "../Components/Categories";
import SubCategories from "../Components/SubCategories";
import GetCategories from "./GetCategories";

function CategoryPage() {
  return (
    <div>
      <CategoryPageContainer>
        <Search />
        <Categories />
        <SubCategories />
        <GetCategories />
      </CategoryPageContainer>
    </div>
  );
}
const CategoryPageContainer = styled.div``;

export default CategoryPage;
