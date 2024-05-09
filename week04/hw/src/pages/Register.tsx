import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PageTitle from '../components/PageTitle';

const Register = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <PageTitle title="Register" />
        <FormInput inputTitle="ID" inputValue={id} onChange={setId} placeholder="ID를 입력해 주세요" />
        <FormInput inputTitle="PW" inputValue={password} onChange={setPassword} placeholder="PW를 입력해 주세요" />
        <FormInput
          inputTitle="닉네임"
          inputValue={nickname}
          onChange={setNickname}
          placeholder="닉네임을 입력해 주세요"
        />
        <InfoTxt>비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</InfoTxt>
        <FormInput
          inputTitle="전화번호"
          inputValue={phone}
          onChange={setPhone}
          placeholder="전화번호를 입력해 주세요"
        />
        <InfoTxt>전화번호 형식은 010-****-****입니다.</InfoTxt>
        <Button buttonText="회원가입" />
        <Button buttonText="뒤로가기" />
      </PageWrapper>
    </>
  );
};

export default Register;

const PageWrapper = styled.div`
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 40rem;
  margin: 0 auto;

  text-align: center;

  border: 5px solid #d1b2ff;
  border-radius: 15px;
`;

const InfoTxt = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5.5rem;

  color: #0900ff;
  font-weight: 500;
  font-size: 0.4rem;
`;
