// Components

import DisplayMovies from "../Components/DisplayMovies";
import DisplayPopularMovies from "../Components/DisplayPopularMovies";
import SubCategories from "../Components/SubCategories";
import TopBar from "../Components/TopBar";

function MoviesPage() {
  return (
    <div>
      <TopBar />
      <DisplayMovies />
      <SubCategories />
      <DisplayPopularMovies />
    </div>
  );
}

export default MoviesPage;
