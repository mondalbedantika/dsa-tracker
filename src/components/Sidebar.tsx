import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Library, List, CalendarCheck, BookOpen, BarChart3, Award, Settings } from 'lucide-react';

export const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Problem Sets', icon: Library, path: '/problem-sets' },
    { name: 'Problems', icon: List, path: '/problems' },
    { name: 'Revisions', icon: CalendarCheck, path: '/revisions' },
    { name: 'Notes', icon: BookOpen, path: '/notes' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Achievements', icon: Award, path: '/achievements' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface border-r border-outline-variant flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-sans font-bold text-on-surface">AlgoZenith</h1>
        <p className="text-sm font-mono text-secondary mt-1">Companion</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? 'bg-surface-bright text-accent ring-1 ring-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-sans font-medium text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-outline-variant mt-auto">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-surface-container cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
            U
          </div>
          <span className="text-sm font-medium text-on-surface">User Profile</span>
        </div>
      </div>
    </aside>
  );
};
