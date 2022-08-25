import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../MyContext";

function DisplaySeries() {
  const { popularSeries } = useContext(MyContext);
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          perPage: 5,
          pagination: false,
          gap: "4rem",
          slide: true,
          drag: "free",
          arrows: true,
        }}
      >
        {popularSeries.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Card>
                <div>{movie.title}</div>
                <img src={movie.image} alt={movie.title} />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
const Card = styled.div`
  min-height: 20rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
  }
  div {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
  }
`;
export default DisplaySeries;
