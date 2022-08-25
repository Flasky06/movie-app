import DisplayPopularSeries from "../Components/DisplayPopularSeries";
import DisplaySeries from "../Components/DisplaySeries";
import SubCategories from "../Components/SubCategories";
import TopBar from "../Components/TopBar";

function SeriesPage() {
  return (
    <div>
      <TopBar />
      <DisplaySeries />
      <SubCategories />
      <DisplayPopularSeries />
    </div>
  );
}

export default SeriesPage;
