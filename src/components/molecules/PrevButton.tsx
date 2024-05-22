import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #5999e8;
    color: #000;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PrevButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BackButton
      onClick={() => navigate(-1)}
      disabled={window.history.length <= 1}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 12H5M12 19l-7-7 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BackButton>
  );
};

export default PrevButton;
