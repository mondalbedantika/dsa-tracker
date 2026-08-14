import { useAppStore } from '../context/AppStore';
import { motion } from 'framer-motion';
import { CalendarClock, AlertCircle, CheckCircle } from 'lucide-react';

export const RevisionQueue = () => {
  const { problems } = useAppStore();

  const dueToday = problems.filter(p => p.solved && p.revisionStage !== 'Mastered'); // Mock logic
  const overdue = problems.filter(_ => false); // Mock logic

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Revision Queue</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Spaced repetition for long-term mastery.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-bright border border-error-container/50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="text-error" w-5 h-5 />
            <h2 className="text-lg font-sans font-semibold text-on-surface">Overdue</h2>
          </div>
          <div className="text-3xl font-mono font-bold text-on-surface mb-2">{overdue.length}</div>
          <p className="text-xs text-on-surface-variant font-mono">Requires immediate attention</p>
        </div>

        <div className="bg-surface-bright border border-primary/50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CalendarClock className="text-[#adc56c]" w-5 h-5 />
            <h2 className="text-lg font-sans font-semibold text-on-surface">Due Today</h2>
          </div>
          <div className="text-3xl font-mono font-bold text-on-surface mb-2">{dueToday.length}</div>
          <p className="text-xs text-on-surface-variant font-mono">Scheduled for today</p>
        </div>

        <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="text-secondary" w-5 h-5 />
            <h2 className="text-lg font-sans font-semibold text-on-surface">Mastered</h2>
          </div>
          <div className="text-3xl font-mono font-bold text-on-surface mb-2">
            {problems.filter(p => p.revisionStage === 'Mastered').length}
          </div>
          <p className="text-xs text-on-surface-variant font-mono">Fully memorized</p>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <h3 className="text-xl font-sans font-semibold text-on-surface">Up Next</h3>
        
        {dueToday.length === 0 ? (
          <div className="bg-surface-bright border border-dashed border-outline-variant rounded-lg p-12 flex flex-col items-center justify-center">
            <CalendarClock className="w-10 h-10 text-outline-variant mb-4" />
            <p className="text-on-surface-variant">You're all caught up for today!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 space-y-3">
            {dueToday.map((problem, idx) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-surface-bright border border-outline-variant rounded-md p-4 flex justify-between items-center hover:border-primary/50 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-on-surface">{problem.title}</h4>
                  <div className="flex items-center space-x-3 mt-1 text-xs font-mono text-on-surface-variant">
                    <span>{problem.topic}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-surface-container rounded-sm">{problem.revisionStage}</span>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-fixed transition-colors">
                  Revise Now
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
