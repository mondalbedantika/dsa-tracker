import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Problem, ProblemSet, Activity } from '../types';

interface AppState {
  problems: Problem[];
  problemSets: ProblemSet[];
  activities: Activity[];
  markSolved: (id: string) => void;
  updateNotes: (id: string, notes: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

// Mock Data for initial state
const initialProblems: Problem[] = [
  {
    id: '1',
    title: 'Two Sum',
    topic: 'Arrays',
    difficulty: 'Easy',
    problemSet: 'Blind 75',
    link: '#',
    solved: false,
    revisionStage: 'Unsolved'
  }
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [problems, setProblems] = useState<Problem[]>(() => {
    const saved = localStorage.getItem('dsa_problems');
    return saved ? JSON.parse(saved) : initialProblems;
  });

  const [problemSets] = useState<ProblemSet[]>([
    { id: '1', name: 'Blind 75', totalProblems: 75 },
    { id: '2', name: 'NeetCode 150', totalProblems: 150 }
  ]);

  const [activities] = useState<Activity[]>([]);

  useEffect(() => {
    localStorage.setItem('dsa_problems', JSON.stringify(problems));
  }, [problems]);

  const markSolved = (id: string) => {
    setProblems(problems.map(p => 
      p.id === id ? { ...p, solved: true, revisionStage: 'Solved', dateSolved: new Date().toISOString() } : p
    ));
  };

  const updateNotes = (id: string, notes: string) => {
    setProblems(problems.map(p => p.id === id ? { ...p, notes } : p));
  };

  return (
    <AppContext.Provider value={{ problems, problemSets, activities, markSolved, updateNotes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used within AppProvider');
  return context;
};
