import { CARD_LIST } from "./../constants/cardList";

export const getRandomCards = (cardNum) => {
  const shuffledCards = [...CARD_LIST].sort(() => Math.random() - 0.5);
  const selectedCards = shuffledCards.slice(0, cardNum);
  const doubledCards = selectedCards.concat(selectedCards);
  const finalCards = doubledCards.sort(() => Math.random() - 0.5);

  return finalCards;
};
