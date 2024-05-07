import styled from "@emotion/styled";
import { useState } from "react";
import Reset from "../components/Reset";
import levels from "./../constants/levels";

const SetLevels = ({ onLeaveSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState(levels[0].level);
  const [cardNum, setCardNum] = useState(levels[0].cardMax);

  const handleLevelSelect = (level, cardMax) => {
    setSelectedLevel(level);
    setCardNum(cardMax);
    onLeaveSelect(cardMax);
  };

  return (
    <>
      <LevelButtons>
        {levels.map((levelInfo) => (
          <LevelButton
            key={levelInfo.level}
            onClick={() =>
              handleLevelSelect(levelInfo.level, levelInfo.cardMax)
            }
            selected={selectedLevel === levelInfo.level}
          >
            {levelInfo.level}
          </LevelButton>
        ))}
      </LevelButtons>
      <Reset resetGame={onLeaveSelect} cardNum={cardNum} />
    </>
  );
};

export default SetLevels;

const LevelButtons = styled.div`
  display: flex;

  width: 100%;

  justify-content: center;
  margin: 1.5rem auto;
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
