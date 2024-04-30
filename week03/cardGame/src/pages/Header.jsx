import styled from "@emotion/styled";
import { useState } from "react";

const Header = (props) => {
  const { score } = props;
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const levels = ["easy", "normal", "hard"];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div>
      <HeaderWrapper>
        <Title>카드 맞추기</Title>
        <Score> SCORE : {score}</Score>
      </HeaderWrapper>

      <LevelButtons>
        {levels.map((level) => (
          <LevelButton
            key={level}
            onClick={() => handleLevelSelect(level)}
            selected={selectedLevel === level}
          >
            {level}
          </LevelButton>
        ))}
      </LevelButtons>
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

const LevelButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const LevelButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;

  font-family: DNFBitBit;
  font-size: 1rem;

  background-color: ${({ selected }) => (selected ? "pink" : "transparent")};
  color: ${({ selected }) => (selected ? "white" : "black")};

  border: 2px solid pink;
  border-radius: 5px;

  cursor: pointer;
  outline: none;
  &:hover {
    background-color: pink;
    color: white;
  }
`;
