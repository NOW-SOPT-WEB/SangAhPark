import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import MainImage from '../assets/MainImg.jpg';
import Button from '../components/Button';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <DefaultImg src={MainImage} />
        <Button buttonText="내 정보" onClick={() => navigate('/mypage')} />
        <Button buttonText="회원가입" onClick={() => navigate('/register')} />
      </PageWrapper>
    </>
  );
};

export default MainPage;

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

const DefaultImg = styled.img`
  width: 25rem;
  height: 25rem;
`;
