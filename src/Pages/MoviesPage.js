// Components
import DisplayMovies from "../Components/DisplayMovies";
import SubCategories from "../Components/SubCategories";
import TopRatedMovie from "../Components/TopRatedMovie";

function MoviesPage() {
  return (
    <div>
      <DisplayMovies />
      <SubCategories />
      <TopRatedMovie />
    </div>
  );
}

export default MoviesPage;
