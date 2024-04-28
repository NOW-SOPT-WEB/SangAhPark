import styled from "@emotion/styled";
import { useState } from "react";

const Header = () => {
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const levels = ["easy", "normal", "hard"];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div>
      <HeaderWrapper>
        <Title>카드 맞추기</Title>
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

  width: 100%;
  height: 10rem;

  color: white;
  background-color: pink;
`;

const Title = styled.div`
  display: flex;

  height: 10rem;

  justify-content: center;
  align-items: center;

  font-size: 4rem;
`;

const LevelButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const LevelButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
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
