import { Outlet } from 'react-router-dom';

const Members: React.FC = () => {
  return (
    <>
      <h1>members</h1>
      <Outlet />
    </>
  );
};

export default Members;
