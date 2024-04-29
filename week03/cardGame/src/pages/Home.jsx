import Header from "./Header";
import Card from "../components/Card";
import styled from "@emotion/styled";

function Home() {
  return (
    <div>
      <Header />
      <CardWrapper>
        <Card />
      </CardWrapper>
    </div>
  );
}

export default Home;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 1rem;
  justify-content: center;
`;
