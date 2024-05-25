import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopLink = styled(Link)`
  display: block;
  text-align: center;
`;

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <TopLink to="/">TOP</TopLink>
    </div>
  );
};

export default NotFound;
