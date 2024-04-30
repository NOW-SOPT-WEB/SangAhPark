import Card from "../components/Card";
import styled from "@emotion/styled";

function Home() {
  return (
    <div>
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

  justify-content: center;
`;
