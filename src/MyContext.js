import { createContext } from "react";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  // const reducer = (state, action) => {switch(action.type)};
  // const [state, dispatch] = useReducer(reducer, { popularMovies: [] });
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  const getPopularMovies = () => {
    const check = localStorage.getItem("popularMovies");
    if (check) {
      setPopularMovies(JSON.parse(check));
    } else {
      axios
        .get(`https://imdb-api.com/en/API/MostPopularMovies/k_dizp79v2? `)
        .then((res) => {
          console.log(res);
          localStorage.setItem("popularMovies", JSON.stringify(res.data.items));
          setPopularMovies(res.data.items);
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  };
  const getPopularSeries = () => {
    const check = localStorage.getItem("popularSeries");
    if (check) {
      setPopularMovies(JSON.parse(check));
    } else {
      axios
        .get(`https://imdb-api.com/en/API/MostPopularTVs/k_dizp79v2`)
        .then((res) => {
          console.log(res);
          localStorage.setItem("popularSeries", JSON.stringify(res.data.items));
          setPopularSeries(res.data.items);
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  };
  useEffect(() => {
    getPopularMovies();
    getPopularSeries();
  }, []);
  return (
    <MyContext.Provider value={{ popularMovies, popularSeries }}>
      {children}
    </MyContext.Provider>
  );
};
