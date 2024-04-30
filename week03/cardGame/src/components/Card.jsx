import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import dummyImage from "../../public/img/sanrio.jpg";
import SuccessModal from "./SuccessModal";
import Header from "./../pages/Header";
import Reset from "../components/Reset";
import SetLevels from "./SetLevels";

const getRandomCards = (cardNum) => {
  const shuffledCards = [...CARD_LIST].sort(() => Math.random() - 0.5);
  const selectedCards = shuffledCards.slice(0, cardNum);
  const doubledCards = selectedCards.concat(selectedCards);
  return doubledCards.sort(() => Math.random() - 0.5);
};

const Card = () => {
  const [cards, setCards] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedIndexes, setClickedIndexes] = useState([]);

  useEffect(() => {
    const newCards = getRandomCards(5);
    setCards(newCards);
  }, []);

  useEffect(() => {
    setScore(0);
  }, [cards]);

  const handleCardClick = (index) => {
    if (
      selectedIndexes.length < 2 &&
      !selectedIndexes.includes(index) &&
      !matchedIndexes.includes(index)
    ) {
      const updatedCards = cards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setSelectedIndexes([...selectedIndexes, index]);
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  useEffect(() => {
    if (selectedIndexes.length === 2) {
      const firstIndex = selectedIndexes[0];
      const secondIndex = selectedIndexes[1];
      if (cards[firstIndex].imgSrc !== cards[secondIndex].imgSrc) {
        setTimeout(() => {
          const flipBackCards = () => {
            const updatedCards = cards.map((card, index) => ({
              ...card,
              flipped: matchedIndexes.includes(index) ? true : false,
            }));
            setCards(updatedCards);
            setSelectedIndexes([]);
          };
          flipBackCards();
        }, 1000);
      } else {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
        setSelectedIndexes([]);
        setScore(score + 1);
      }
    }
  }, [selectedIndexes]);

  useEffect(() => {
    if (matchedIndexes.length === cards.length && cards.length > 0) {
      setShowModal(true);
    }
  }, [matchedIndexes, cards.length]);

  const resetGame = () => {
    const newCards = getRandomCards(5);
    setCards(newCards);
    setSelectedIndexes([]);
    setMatchedIndexes([]);
    setShowModal(false);
    setScore(0);
  };

  return (
    <>
      <Header score={score} cardNum={cards.length} />
      <Reset resetGame={resetGame} />

      <SetLevels
        onLeavelSelect={(cardNum) => {
          const newCards = getRandomCards(cardNum);
          setCards(newCards);
        }}
      />
      {cards.map((card, index) => (
        <CardWrapper
          key={index}
          onClick={() => handleCardClick(index)}
          style={{
            transform: clickedIndexes.includes(index)
              ? "rotateY(180deg)"
              : "none",
          }}
        >
          <CardImg
            src={card.flipped ? card.imgSrc : dummyImage}
            alt={card.imgAlt}
            flipped={card.flipped}
          />
        </CardWrapper>
      ))}
      {showModal && <SuccessModal resetGame={resetGame} />}
    </>
  );
};

export default Card;

const CardWrapper = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 0.5rem;
  border: solid pink 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.5s;
  perspective: 1000px;
`;

const CardImg = styled.img`
  width: 12rem;
  height: 12rem;
  transition: transform 0.3s ease;
  transform-style: ;
  ${({ flipped }) => flipped && "transform: rotateY(180deg);"}
`;
