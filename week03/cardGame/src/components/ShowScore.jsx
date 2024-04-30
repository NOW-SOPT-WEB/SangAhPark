import styled from "@emotion/styled";
import React from "react";

const ShowScore = ({ score }) => {
  return (
    <>
      <Score> SCORE : {score} </Score>
    </>
  );
};

export default ShowScore;
const Score = styled.p`
  font-family: DNFBitBit;
  font-size: 1.5rem;
`;
