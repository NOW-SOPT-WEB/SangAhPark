import React from 'react';
import styled from 'styled-components';

type Props = {
  inputTitle: string;
  inputLabel: string;
};

const FormInput = (props: Props) => {
  return (
    <>
      <FormInputWrapper>
        <FormInputTitle>{props.inputTitle}</FormInputTitle>
        <FormInputBox id={props.inputLabel} />
      </FormInputWrapper>
    </>
  );
};

export default FormInput;

const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding-top: 1rem;
`;

const FormInputTitle = styled.p`
  grid-column: 1;
  align-items: center;
  justify-content: center;
  height: 2rem;

  font-size: 1rem;
`;

const FormInputBox = styled.input`
  height: 2rem;
  padding-left: 0;
`;
