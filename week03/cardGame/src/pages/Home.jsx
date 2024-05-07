import Card from "../components/Card";
import styled from "@emotion/styled";

function Home() {
  return (
    <>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </>
  );
}

export default Home;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;
