import styled from "@emotion/styled";

const SuccessModal = ({ resetGame }) => {
  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>😍축하합니다😍</ModalTitle>
          <ModalButton onClick={resetGame}>Play Again</ModalButton>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default SuccessModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 20rem;
  height: 10rem;

  border-radius: 1rem;
  background-color: pink;
`;

const ModalTitle = styled.div`
  display: flex;

  width: 20rem;
  height: 3rem;

  margin-top: 1.4rem;

  color: white;
  font-size: 2rem;
  font-family: DNFBitBit;

  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  display: relative;

  width: 10rem;
  height: 2rem;

  margin-left: 25%;

  text-align: center;

  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-family: DNFBitBit;

  color: pink;
  border-radius: 1rem;
  border: solid 1px pink;
`;
