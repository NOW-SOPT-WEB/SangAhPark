import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  inputTitle: string;
  inputValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
  warnMessage: string;
  isempty?: boolean;
};

const FormInput = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <FormInputWrapper>
        <FormInputTitle>{props.inputTitle}</FormInputTitle>
        <FormInputBox
          value={props.inputValue}
          onChange={handleChange}
          placeholder={props.placeholder}
          $isempty={props.isempty}
        />
      </FormInputWrapper>
      {props.inputValue.trim() === '' && <FormInputWarn>{props.warnMessage}</FormInputWarn>}
    </>
  );
};

export default FormInput;

const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  padding-top: 1rem;
`;

const FormInputTitle = styled.p`
  flex: 20%;
  height: 2rem;
  margin-right: 0;
  padding-right: 0;

  font-size: 1rem;
`;

const FormInputBox = styled.input<{ $isempty?: boolean }>`
  flex: 40%;
  height: 2rem;
  margin-right: 3rem;
  padding-left: 0;

  border: 1.5px solid black;
  border-radius: 5px;

  ${(props) =>
    props.$isempty !== undefined &&
    props.$isempty.toString() === 'true' &&
    css`
      border: 1.5px solid red;
    `}
`;

const FormInputWarn = styled.p`
  position: relative;
  margin: 0 auto;
  padding-left: 3rem;
  font-size: 0.8rem;
  color: #d1b2ff;
`;
