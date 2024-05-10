import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { joinMember } from './../apis/memberjoin';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PageTitle from '../components/PageTitle';
import { addHyphensToPhoneNumber } from '../utils/addHypen';
import { validatePassword } from '../utils/regPwd';

const Register = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!validatePassword(password)) {
      alert('비밀번호를 다시 확인하세요');
      return;
    } else {
      const data = {
        authenticationId: id,
        password,
        nickname,
        phone,
      };

      const res = await joinMember(data);
      if (res) {
        if (confirm(res?.data.message)) navigate('/');
      }
    }
  };

  const handlePhoneChange = () => {
    const phoneNumber = addHyphensToPhoneNumber(phone);
    setPhone(phoneNumber);
  };

  return (
    <>
      <PageWrapper>
        <PageTitle title="Register" />
        <FormInput
          inputTitle="ID"
          inputValue={id}
          onChange={setId}
          placeholder="ID를 입력해 주세요"
          isempty={id.trim() === ''}
        />
        <FormInput
          inputTitle="PW"
          inputValue={password}
          onChange={setPassword}
          placeholder="PW를 입력해 주세요"
          isempty={password.trim() === ''}
        />
        <InfoTxt>비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</InfoTxt>

        <FormInput
          inputTitle="닉네임"
          inputValue={nickname}
          onChange={setNickname}
          placeholder="닉네임을 입력해 주세요"
          isempty={nickname.trim() === ''}
        />
        <FormInput
          inputTitle="전화번호"
          inputValue={phone}
          onChange={handlePhoneChange}
          placeholder="전화번호를 입력해 주세요"
          isempty={phone.trim() === ''}
        />
        <InfoTxt>전화번호 형식은 010-****-****입니다.</InfoTxt>
        <Button buttonText="회원가입" onClick={handleJoin} />
        <Button buttonText="뒤로가기" onClick={() => navigate(-1)} />
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
  font-size: 0.5rem;
`;
