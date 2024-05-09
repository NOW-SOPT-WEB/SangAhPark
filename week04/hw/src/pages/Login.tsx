import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <LoginWrapper></LoginWrapper>
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
