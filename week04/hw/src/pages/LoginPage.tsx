import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { loginMember } from '../apis/memberlogin.ts';
import LoginImage from '../assets/LoginImg.jpg';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PageTitle from '../components/PageTitle';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = {
      authenticationId: id,
      password,
    };

    const res = await loginMember(data);
    if (res) {
      if (confirm(res?.data.message)) navigate(`/main/${res.headers.location}`);
    }
  };

  return (
    <>
      <PageWrapper>
        <PageTitle title="Login" />
        <DefaultImg src={LoginImage} />
        <FormInput inputTitle="ID" inputValue={id} onChange={setId} placeholder="ID를 입력해 주세요" />
        <FormInput inputTitle="PW" inputValue={password} onChange={setPassword} placeholder="PW를 입력해 주세요" />

        <Button buttonText="로그인" onClick={handleLogin} />
        <Button buttonText="회원가입" />
      </PageWrapper>
    </>
  );
};

export default Login;

const PageWrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  border: 5px solid #d1b2ff;
  border-radius: 15px;

  width: 25rem;
  height: 40rem;
`;

const DefaultImg = styled.img`
  width: 15rem;
  height: 15rem;
`;
