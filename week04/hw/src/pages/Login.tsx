import styled from 'styled-components';

import LoginImage from '../assets/LoginImg.jpg';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PageTitle from '../components/PageTitle';

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <PageTitle title="Login" />
        <DefaultImg src={LoginImage} />
        <FormInput inputTitle="ID" id="ID를 입력해 주세요" />
        <FormInput inputTitle="PW" id="PW를 입력해 주세요" />
        <Button buttonText="로그인" />
        <Button buttonText="회원가입" />
      </LoginWrapper>
    </>
  );
};

export default Login;

const LoginWrapper = styled.div`
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
