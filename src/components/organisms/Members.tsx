import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProfileIcon from '@/components/atoms/ProfileIcon';
import PrevButton from '@/components/molecules/PrevButton';
import { members } from '@/data';

const MemberLink = styled(Link)`
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #e0e0e0; /* より目立つために濃い色 */
    transform: translateY(-5px);
    transition:
      background-color 0.3s,
      transform 0.3s,
      box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* より効果的なシャドウを追加 */
  }
`;

const Header = styled.h1`
  margin: 20px 0;
`;

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const MemberName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 4px;
`;

const MemberInfo = styled.div`
  color: #555;
`;

const MemberIcon = styled(ProfileIcon)`
  &:hover {
    transform: scale(1.1);
  }
`;

const Members: React.FC = () => {
  return (
    <>
      <PrevButton />
      <Header>members</Header>
      {members.map((member) => (
        <MemberLink key={member.id} to={`/members/${member.id}`}>
          <MemberItem>
            <MemberIcon
              image_path={member.profile_img_path}
              width={75}
              height={75}
              radius={50}
            />

            <MemberDetails>
              <MemberName>{member.name}</MemberName>
              <MemberInfo>{member.age}歳</MemberInfo>
              <MemberInfo>{member.position}</MemberInfo>
            </MemberDetails>
          </MemberItem>
        </MemberLink>
      ))}
    </>
  );
};

export default Members;
