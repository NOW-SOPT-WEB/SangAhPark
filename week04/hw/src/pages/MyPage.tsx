import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { changePwd } from './../apis/changePassword';
import { getInfo } from '../apis/memberinfo.ts';
import PwdToggle from '../assets/toggle.svg';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

const MyPage = () => {
  const navigate = useNavigate();
  const memberId = useParams().id;

  const [userInfo, setUserInfo] = useState(null);
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVerification, setNewPasswordVerification] = useState('');

  const [isPwdChangeVisible, setIsPwdChangeVisible] = useState(false); // 토글 상태 추가

  const handleInfo = async () => {
    const res = await getInfo(memberId);
    if (res) {
      setUserInfo(res.data.data);
    }
  };

  useEffect(() => {
    handleInfo();
  }, []);

  const changeSubmit = async () => {
    const data = {
      previousPassword: previousPassword,
      newPassword: newPassword,
      newPasswordVerification: newPasswordVerification,
    };

    const res = await changePwd(data, memberId);
    if (res) {
      if (confirm(res?.data.message)) navigate(`/main/${memberId}`);
    }
  };

  const handleToggleClick = () => {
    setIsPwdChangeVisible(!isPwdChangeVisible); // 토글 상태 토글
  };

  return (
    <>
      <PageWrapper>
        <MyInfoWrapper>
          <MyInfoTitle>ID</MyInfoTitle>
          <MyInfoContent>{userInfo ? userInfo.authenticationId : 'ID'}</MyInfoContent>
          <MyInfoTitle>닉네임</MyInfoTitle>
          <MyInfoContent>{userInfo ? userInfo.nickname : 'NICKNAME'}</MyInfoContent>
          <MyInfoTitle>전화번호</MyInfoTitle>
          <MyInfoContent>{userInfo ? userInfo.phone : 'PHONE'}</MyInfoContent>
        </MyInfoWrapper>
        <PwdWrapper>
          <PWDToggle onClick={handleToggleClick}>비밀번호 변경</PWDToggle>
          <DefaultImg src={PwdToggle} onClick={handleToggleClick} />
        </PwdWrapper>
        {isPwdChangeVisible && (
          <PwdChangeInput>
            <FormInput inputTitle="기존 비밀번호" inputValue={previousPassword} onChange={setPreviousPassword} />
            <FormInput inputTitle="새로운 비밀번호" inputValue={newPassword} onChange={setNewPassword} />
            <FormInput
              inputTitle="비밀번호 확인"
              inputValue={newPasswordVerification}
              onChange={setNewPasswordVerification}
            />
          </PwdChangeInput>
        )}
        <Button buttonText="비밀번호 변경" onClick={changeSubmit} />
        <Button buttonText="홈으로" onClick={() => navigate(`/main/${memberId}`)} />
      </PageWrapper>
    </>
  );
};

export default MyPage;

const PageWrapper = styled.div`
  width: 25rem;
  height: 40rem;
  margin: 0 auto;

  text-align: center;

  border: 5px solid #d1b2ff;
  border-radius: 15px;
`;

const MyInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  padding-top: 4rem;

  column-gap: 3rem;
`;

const MyInfoTitle = styled.div`
  grid-column: 1;
  padding-top: 0.5rem;

  font-weight: bold;
`;

const MyInfoContent = styled.div`
  grid-column: 2;
  padding-top: 0.5rem;
`;

const PWDToggle = styled.p`
  color: #d1b2ff;
  font-weight: bold;
  text-align: center;
`;

const PwdWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DefaultImg = styled.img`
  padding-top: 0.7rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const PwdChangeInput = styled.div``;
