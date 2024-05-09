import styled from 'styled-components';

type buttonText = string;

const Button = (props: buttonText) => {
  return (
    <>
      <PageButton> {props.buttonText} </PageButton>
    </>
  );
};

export default Button;

const PageButton = styled.button`
  width: 6.5rem;
  height: 2rem;

  border: 5px solid #d1b2ff;
  border-radius: 5px;
  background-color: #d1b2ff;

  color: #f6f6f6;

  margin: 3rem 1rem;
  font-size: 1rem;

  cursor: pointer;
`;
