import React from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProfileIcon from '@/components/atoms/ProfileIcon';
import PrevButton from '@/components/molecules/PrevButton';
import { members } from '@/data';

const Container = styled.div`
  padding: 20px;
`;

const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 1024px;
`;

const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MemberName = styled.div`
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 10px;
`;

const MemberAttribute = styled.div`
  color: #555;
  font-size: 1.2em;
  margin-bottom: 5px;

  &.long-comment {
    color: #777;
    font-size: 1em;
  }
`;

const Member: React.FC = () => {
  const { memberId } = useParams();
  const member = members.find(({ id }) => id === parseInt(memberId!));

  // TODO: 404を発生
  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <Container>
      <PrevButton />
      <MemberInfo>
        <ProfileIcon
          image_path={member.main_img_path}
          width={270}
          height={480}
        />
        <MemberDetails>
          <MemberName>{member.name}</MemberName>
          <MemberAttribute>{member.age}歳</MemberAttribute>
          <MemberAttribute>{member.position}</MemberAttribute>
          <MemberAttribute className="long-comment">
            {member.long_comment}
          </MemberAttribute>
        </MemberDetails>
      </MemberInfo>
    </Container>
  );
};

export default Member;
