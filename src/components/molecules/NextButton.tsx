import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
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
    width: 12px;
    height: 12px;
  }
`;

const PrevButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <GoButton onClick={() => navigate(1)}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </GoButton>
  );
};

export default PrevButton;
