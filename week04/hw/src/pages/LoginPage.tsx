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

  const [idWarn, setIdWarn] = useState('');
  const [passwordWarn, setPasswordWarn] = useState('');
  const navigate = useNavigate();

  const handleIdChange = (value: string) => {
    setId(value);
    const warningMessage = isInputEmpty(value) ? '아이디를 입력해 주세요' : '';
    setIdWarn(warningMessage);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const warningMessage = isInputEmpty(value) ? '비밀번호를 입력해 주세요' : '';
    setPasswordWarn(warningMessage);
  };

  const handleLogin = async () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해 주세요');
      setIdWarn('아이디를 입력해 주세요');
      setPasswordWarn('비밀번호를 입력해 주세요');

      return;
    }
    const data = {
      authenticationId: id,
      password,
    };

    const res = await loginMember(data);
    if (res) {
      if (confirm(res?.data.message)) navigate(`/main/${res.headers.location}`);
    }
  };

  const isInputEmpty = (value: string) => {
    return value.trim() === '';
  };

  return (
    <>
      <PageWrapper>
        <PageTitle title="Login" />
        <DefaultImg src={LoginImage} />
        <FormInput
          inputTitle="ID"
          inputValue={id}
          onChange={handleIdChange}
          placeholder="ID를 입력해 주세요"
          warnMessage={idWarn}
        />
        <FormInput
          inputTitle="PW"
          inputValue={password}
          onChange={handlePasswordChange}
          placeholder="PW를 입력해 주세요"
          warnMessage={passwordWarn}
        />
        <Button buttonText="로그인" onClick={handleLogin} />
        <Button buttonText="회원가입" onClick={() => navigate('/register')} />
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
