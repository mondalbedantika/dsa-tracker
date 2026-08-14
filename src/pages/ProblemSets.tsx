import { useAppStore } from '../context/AppStore';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const ProblemSets = () => {
  const { problemSets, problems } = useAppStore();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Problem Sets</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Organized tracks for mastery.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {problemSets.map((set, idx) => {
          const setProblems = problems.filter(p => p.problemSet === set.name);
          const solved = setProblems.filter(p => p.solved).length;
          const progress = set.totalProblems > 0 ? (solved / set.totalProblems) * 100 : 0;

          return (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-bright border border-outline-variant hover:border-primary/50 transition-colors rounded-lg p-6 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-sans font-semibold text-on-surface">{set.name}</h2>
                  <p className="text-sm text-on-surface-variant mt-1 font-mono">Last activity: 2 days ago</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-on-surface-variant">Progress</span>
                  <span className="text-on-surface font-medium">{solved} / {set.totalProblems} ({Math.round(progress)}%)</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>

                <div className="flex justify-between text-xs font-mono text-on-surface-variant pt-2 border-t border-outline-variant/50">
                  <span>{set.totalProblems - solved} remaining</span>
                  <span className="text-primary hover:underline">Continue Solving</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
