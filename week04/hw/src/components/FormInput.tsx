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

const FormInputBox = styled.input`
  flex: 40%;
  height: 2rem;
  margin-right: 3rem;
  padding-left: 0;
`;
