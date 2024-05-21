import PropTypes from 'prop-types';
import styled from 'styled-components';

type Props = { image_path?: string };

const DEFAULT_ICON = '/default_icon.svg';

const Icon = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #ffcccb;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileIcon: React.FC<Props> = ({ image_path = DEFAULT_ICON }) => {
  return <Icon src={image_path} alt="profile" />;
};

ProfileIcon.propTypes = {
  image_path: PropTypes.string.isRequired,
};

export default ProfileIcon;
