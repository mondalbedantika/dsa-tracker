import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-on-background flex">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <div className="max-w-[1280px] mx-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
