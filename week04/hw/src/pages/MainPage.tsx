import styled from 'styled-components';

import MainImage from '../assets/MainImg.jpg';
import Button from '../components/Button';

const MainPage = () => {
  return (
    <>
      <PageWrapper>
        <DefaultImg src={MainImage} />
        <Button buttonText="내 정보" />
        <Button buttonText="회원가입" />
      </PageWrapper>
    </>
  );
};

export default MainPage;

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
  width: 25rem;
  height: 25rem;
`;
