import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';

const MainPage = () => {
  const navigate = useNavigate();
  const memberId = useParams().id;

  return (
    <>
      <PageWrapper>
        <PlayerWrapper>
          <ReactPlayer
            url="https://youtu.be/Vj1_2PnP1LA?si=FfZyROC2RVolsj77"
            width="100%"
            playing={true}
            loop={true}
            volume={1}
          />
        </PlayerWrapper>
        <Button buttonText="내 정보" onClick={() => navigate(`/mypage/${memberId}`)} />
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

const PlayerWrapper = styled.div`
padding-top: 5rem;
position: relative;
.react-player {
  position: absolute;
  top: 0;
  left: 0;
`;
