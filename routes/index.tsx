import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Member from '@/components/molecules/Member';
import Members from '@/components/organisms/Members';
import Home from '@/components/templates/Home';
import NotFound from '@/components/templates/NotFound';

const IndexRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="members" element={<Members />} />
      <Route path="members/:memberId" element={<Member />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default IndexRoutes;
