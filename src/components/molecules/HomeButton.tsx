import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #5999e8;
    color: #000;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const HomeButton = styled(Button)`
  left: 100px;
`;

const HomeButtonComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeButton onClick={() => navigate('/')}>
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <style type="text/css">{`.st0{fill:#4B4B4B;}`}</style>
        <g>
          <path
            className="st0"
            d="M433.198,202.846l-69.291-69.236l-54.996-54.926l-52.823-53.018L0,281.562l37.928,37.905l34.026-33.995v200.86
	h150.257h67.577h150.257V285.442l34.026,34.026L512,281.562L433.198,202.846z M408.139,454.426H299.595V335.265h-87.191v119.161
	H103.862V253.589l152.227-152.103l152.05,152.049V454.426z"
          />
        </g>
      </svg>
    </HomeButton>
  );
};

export default HomeButtonComponent;
