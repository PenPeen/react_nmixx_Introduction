import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.button`
  background-color: #f0f0f0;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const PrevButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>戻る</BackButton>
    </>
  );
};

export default PrevButton;
