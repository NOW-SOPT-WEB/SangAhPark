import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Reset = ({ resetGame, cardNum }) => {
  const theme = useTheme();

  const handleReset = () => {
    resetGame(cardNum);
  };

  return (
    <>
      <ResetButton theme={theme} onClick={handleReset}>
        Reset
      </ResetButton>
    </>
  );
};

export default Reset;

const ResetButton = styled.button`
  position: fixed;

  width: 5rem;
  height: 3rem;

  top: 10%;
  right: 5%;

  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};

  border: 2px solid ${(props) => props.theme.colors.background};
  border-radius: 5px;

  justify-content: center;
  align-items: center;

  font-family: DNFBitBit;
  font-size: 1rem;

  cursor: pointer;
`;
