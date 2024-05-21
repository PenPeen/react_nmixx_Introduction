import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Member from '@/components/molecules/Member';
import Members from '@/components/organisms/Members';
import Home from '@/components/templates/Home';

const IndexRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="members" element={<Members />} />
      <Route path="members/:member_id" element={<Member />} />
      <Route path="/" element={<Home />} />
      {/* TODO: Creating Not Found Page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
