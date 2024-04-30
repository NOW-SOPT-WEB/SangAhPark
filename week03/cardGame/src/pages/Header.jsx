import styled from "@emotion/styled";

const Header = ({ score, cardNum }) => {
  return (
    <div>
      <HeaderWrapper>
        <Title>카드 맞추기</Title>
        <Score>
          {" "}
          SCORE : {score}/{cardNum / 2}{" "}
        </Score>
      </HeaderWrapper>
    </div>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  diplay: flex;
  align-items: center;

  width: 100rem;
  height: 10rem;

  color: white;
  background-color: pink;
`;

const Title = styled.div`
  display: flex;

  padding-top: 2rem;

  height: 4rem;

  justify-content: center;
  align-items: center;

  font-family: DNFBitBit;
  font-size: 4rem;
`;

const Score = styled.p`
  font-family: DNFBitBit;
  font-size: 1.5rem;
`;
