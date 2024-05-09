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
  display: flex;
  flex-wrap: nowrap;

  height: 3rem;

  padding-top: 1rem;

  justify-content: center;
  align-items: center;
`;

const FormInputTitle = styled.p`
  display: flex;

  width: 10%;
  height: 3rem;

  padding-left: 0rem;
  padding-right: 0.5rem;

  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
`;

const FormInputBox = styled.input`
  display: flex;

  width: 65%;
  height: 2rem;

  margin-right: 1rem;
`;
