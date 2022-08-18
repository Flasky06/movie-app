import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import SeriesPage from "./Pages/SeriesPage";
// Components
import { MyContextProvider } from "./MyContext";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
