import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

function DisplayMovies() {
  const [popularMovies, setPopular] = useState([]);
  const getPopular = () => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularMovies/k_dizp79v2? `)
      .then((res) => {
        console.log(res);
        setPopular(res.data.items);
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          perPage: 6,
          pagination: false,
          gap: "0.2rem",
          slide: true,
        }}
      >
        {popularMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Card>
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
const Card = styled.div`
  width: 200px;
  height: 300px;
  img {
    width: 200px;
    height: 250px;
  }
`;

export default DisplayMovies;
