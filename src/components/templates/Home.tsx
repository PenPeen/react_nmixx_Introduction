import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <p>
        NMIXX（エンミックス）は、韓国の6人組ガールズグループ。JYPエンターテインメント所属。
        <br></br>
        2022年2月22日、『O.O』でデビュー。公式ファンクラブ名は「NSWER」。
      </p>
      <p>
        グループ名の「NMIXX」は、「now」「new」「next」や未知数「n」を意味する文字「N」と、
        <br></br>
        「組み合わせ」や「多様性」を象徴する「MIX」を組み合わせた造語で、「新しい時代を担当する最上の組み合わせ」という意味を持っている。
        <br></br>
        ファン名の「NSWER」は、「now」「new」「next」や未知数「n」を意味する文字「N」と、英語で「正解」を意味する「ANSWER」を組み合わせた造語である。
        <br></br>
        また「North･ South ･ West ･ East ･
        Route」の頭文字を取った名前でもあり、道に迷ったとしてもファンと共に道を見つけ出して進んでいくという意味が込められている。
      </p>
      <div>
        <StyledLink to="./members">Member一覧</StyledLink>
      </div>
    </>
  );
};

export default Home;
