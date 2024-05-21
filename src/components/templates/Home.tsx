import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GroupIntroduction from '@/components/organisms/GroupIntroduction';

const APP_NAME = 'NMINX Introduction';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  opacity: 0.8;
  margin-right: 125px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #f0f0f0;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    color: #000;
    background-color: #dcdcdc;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <h1>{APP_NAME}</h1>
        <Logo src="/nmixx_logo.png" alt="NMIXX Logo" />
      </Container>
      <GroupIntroduction />
      <div>
        <StyledLink to="./members">Member一覧</StyledLink>
      </div>
    </>
  );
};

export default Home;
