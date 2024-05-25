import PropTypes from 'prop-types';
import styled from 'styled-components';

type Props = {
  width: number;
  height: number;
  radius?: number;
  image_path?: string;
  className?: string;
};

const DEFAULT_ICON = '/default_icon.svg';

const Icon = styled.img<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => (props.radius ? props.radius : 0)}%;
  background-color: #ffcccb;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const ProfileIcon: React.FC<Props> = ({
  image_path = DEFAULT_ICON,
  height,
  width,
  radius,
  className,
}) => {
  return (
    <Icon
      src={image_path}
      alt="profile"
      height={height}
      width={width}
      radius={radius}
      className={className}
    />
  );
};

ProfileIcon.propTypes = {
  image_path: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  radius: PropTypes.number,
  className: PropTypes.string,
};

export default ProfileIcon;
