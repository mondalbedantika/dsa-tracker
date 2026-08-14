import { useAppStore } from '../context/AppStore';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle, Code2, Flame } from 'lucide-react';

import { Heatmap } from '../components/Heatmap';

export const Dashboard = () => {
  const { problems, problemSets } = useAppStore();

  const totalProblems = problemSets.reduce((acc, set) => acc + set.totalProblems, 0);
  const solvedProblems = problems.filter(p => p.solved).length;
  const remainingProblems = totalProblems - solvedProblems;
  const completionPercent = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  const statCards = [
    { label: 'Total Problems', value: totalProblems, icon: Code2, color: 'text-secondary' },
    { label: 'Solved', value: solvedProblems, icon: CheckCircle, color: 'text-primary' },
    { label: 'Remaining', value: remainingProblems, icon: Target, color: 'text-tertiary' },
    { label: 'Completion', value: `${completionPercent}%`, icon: TrendingUp, color: 'text-on-surface' },
    { label: 'Current Streak', value: '3 Days', icon: Flame, color: 'text-[#adc56c]' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Dashboard</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Welcome back. Keep up the momentum.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-bright border border-primary/30 rounded-lg p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-sans font-medium text-on-surface-variant">{stat.label}</span>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-3xl font-mono font-bold text-on-surface">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Heatmap />
        </div>

        {/* Action Widgets */}
        <div className="space-y-6">
          <div className="bg-surface-bright border border-primary/30 rounded-lg p-6">
            <h2 className="text-lg font-sans font-semibold text-on-surface mb-4">Continue Where I Left Off</h2>
            <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-md font-medium text-sm hover:bg-primary-fixed transition-colors">
              Resume "Two Sum"
            </button>
          </div>
          <div className="bg-surface-bright border border-primary/30 rounded-lg p-6">
            <h2 className="text-lg font-sans font-semibold text-on-surface mb-4">Due for Revision</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface font-sans">Valid Palindrome</span>
                <span className="text-xs bg-error-container text-on-error-container px-2 py-1 rounded-full font-mono">Overdue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
