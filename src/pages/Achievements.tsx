import { Award, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const achievements = [
    { id: 1, title: 'First Blood', description: 'Solve your first problem', icon: Award, unlocked: true },
    { id: 2, title: 'Getting Started', description: 'Solve 10 problems', icon: Award, unlocked: false, progress: 10, total: 100 },
    { id: 3, title: 'Half Century', description: 'Solve 50 problems', icon: Award, unlocked: false, progress: 2, total: 100 },
    { id: 4, title: 'Consistency is Key', description: '7-day streak', icon: Award, unlocked: false, progress: 42, total: 100 },
    { id: 5, title: 'Array Master', description: 'Solve 20 Array problems', icon: Award, unlocked: true },
    { id: 6, title: 'Graph Master', description: 'Solve 20 Graph problems', icon: Award, unlocked: false, progress: 0, total: 100 },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Achievements</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Track your milestones and mastery.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative p-6 rounded-lg border ${
              achievement.unlocked 
                ? 'bg-surface-bright border-primary/30' 
                : 'bg-surface border-outline-variant/30 opacity-70'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-full ${achievement.unlocked ? 'bg-primary-container text-primary' : 'bg-surface-container text-outline'}`}>
                <achievement.icon className="w-6 h-6" />
              </div>
              {achievement.unlocked ? (
                <CheckCircle2 className="w-5 h-5 text-[#adc56c]" />
              ) : (
                <Lock className="w-5 h-5 text-outline-variant" />
              )}
            </div>
            
            <h3 className={`text-lg font-sans font-semibold ${achievement.unlocked ? 'text-on-surface' : 'text-on-surface-variant'}`}>
              {achievement.title}
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">{achievement.description}</p>
            
            {!achievement.unlocked && achievement.progress !== undefined && (
              <div className="mt-4">
                <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary/50 rounded-full" 
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
