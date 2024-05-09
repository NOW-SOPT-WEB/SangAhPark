import styled from 'styled-components';

import Button from '../components/Button';
import FormInput from '../components/FormInput';

const MyPage = () => {
  return (
    <>
      <PageWrapper>
        <MyInfoWrapper>
          <MyInfoTitle>ID</MyInfoTitle>
          <MyInfoContent>ID</MyInfoContent>
          <MyInfoTitle>닉네임</MyInfoTitle>
          <MyInfoContent>닉네임</MyInfoContent>
          <MyInfoTitle>전화번호</MyInfoTitle>
          <MyInfoContent>전화번호</MyInfoContent>
        </MyInfoWrapper>
        <PWDToggle>비밀번호 변경</PWDToggle>
        <FormInput inputTitle="기존 비밀번호" />
        <FormInput inputTitle="새로운 비밀번호" />
        <FormInput inputTitle="비밀번호 확인" />
        <Button buttonText="비밀번호 변경" />
        <Button buttonText="홈으로" />
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
