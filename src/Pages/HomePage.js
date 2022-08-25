import { useContext } from "react";
import { MyContext } from "../MyContext";
import styled from "styled-components";
import Search from "../Components/Search";

function HomePage() {
  const { popularMovies } = useContext(MyContext);

  return;
  // (
  //   <Container>
  //     <Search />
  //     <Wrapper>
  //       {popularMovies.map((post) => {
  //         return (
  //           <Card key={post.id}>
  //             <img src={post.image} alt={post.title} />
  //           </Card>
  //         );
  //       })}
  //     </Wrapper>
  //   </Container>
  // );
}
// const Container = styled.div`
//   margin: 0% 10%;
// `;
// const Wrapper = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
//   gap: 0;
//   border-radius: 2rem;
// `;
// const Card = styled.div`
//   img {
//     min-height: 20rem;
//   }
// `;

export default HomePage;
