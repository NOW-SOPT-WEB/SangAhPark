import styled from 'styled-components';

import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PageTitle from '../components/PageTitle';

const Register = () => {
  return (
    <>
      <PageWrapper>
        <PageTitle title="Register" />
        <FormInput inputTitle="ID" id="ID를 입력해 주세요" />
        <FormInput inputTitle="PW" id="PW를 입력해 주세요" />
        <FormInput inputTitle="닉네임" id="PW를 입력해 주세요" />
        <FormInput inputTitle="전화번호" id="PW를 입력해 주세요" />
        <Button buttonText="회원가입" />
        <Button buttonText="뒤로가기" />
      </PageWrapper>
    </>
  );
};

export default Register;

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
