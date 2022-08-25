import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages

import MoviesPage from "./Pages/MoviesPage";
import SeriesPage from "./Pages/SeriesPage";

// Components
import { MyContextProvider } from "./MyContext";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesPage />} />

            <Route path="/series" element={<SeriesPage />} />
            <Route path="/categories/:type" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
