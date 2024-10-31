import styled from 'styled-components';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <PageButton onClick={props.onClick}>{props.buttonText}</PageButton>;
};

export default Button;

const PageButton = styled.button`
  width: 6.5rem;
  height: 2rem;
  margin: 3rem 1rem;

  color: #f6f6f6;
  font-size: 1rem;

  background-color: #d1b2ff;
  cursor: pointer;
  border: 5px solid #d1b2ff;
  border-radius: 5px;
`;
