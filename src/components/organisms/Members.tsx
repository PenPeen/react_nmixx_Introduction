import styled from 'styled-components';

import ProfileIcon from '@/components/atoms/ProfileIcon';
import PrevButton from '@/components/molecules/PrevButton';
import { members } from '@/data';

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

const Members: React.FC = () => {
  return (
    <>
      <PrevButton />
      <Header>members</Header>
      {members.map((member) => (
        <MemberItem key={member.id}>
          <ProfileIcon
            image_path={member.profile_img_path}
            width={75}
            height={75}
          />

          <MemberDetails>
            <MemberName>{member.name}</MemberName>
            <MemberInfo>{member.age}歳</MemberInfo>
            <MemberInfo>{member.position}</MemberInfo>
          </MemberDetails>
        </MemberItem>
      ))}
    </>
  );
};

export default Members;
