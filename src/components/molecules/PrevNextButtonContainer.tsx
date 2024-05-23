import styled from 'styled-components';

import NextButton from './NextButton';
import PrevButton from './PrevButton';

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const PrevNextButtonContainer: React.FC = () => {
  return (
    <ButtonContainer>
      <PrevButton />
      <NextButton />
    </ButtonContainer>
  );
};

export default PrevNextButtonContainer;
