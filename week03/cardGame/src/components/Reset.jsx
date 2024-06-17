import styled from "@emotion/styled";

const Reset = ({ resetGame, cardNum }) => {
  const handleReset = () => {
    resetGame(cardNum);
  };

  return (
    <>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
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

  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  justify-content: center;
  align-items: center;

  font-family: DNFBitBit;
  font-size: 1rem;

  cursor: pointer;
`;
