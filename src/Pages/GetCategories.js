import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function GetCategories() {
  let { type } = useParams();
  const [categoryType, setCategoryType] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      const res = await axios.get(
        `https://imdb-api.com/en/API/${type}/k_dizp79v2 `
      );

      console.log(res.data.items);
      setCategoryType(res.data.items);
    };
    fetchSubCategories();
  }, [type]);
  return (
    <Container>
      {categoryType.map((movie) => {
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
const CategoryPage = styled.div`
  margin: 0 5%;
`;

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
export default GetCategories;
