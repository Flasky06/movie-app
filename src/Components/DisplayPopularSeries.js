import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../MyContext";

function DisplayPopularSeries() {
  const { popularSeries } = useContext(MyContext);
  return (
    <Container>
      {popularSeries.map((movie) => {
        return (
          <Card key={movie.id}>
            <div>{movie.title}</div>
            <img src={movie.image} alt={movie.title} />
          </Card>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 2rem;
`;
const Card = styled.div`
  min-height: 15rem;
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
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default DisplayPopularSeries;
