export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type RevisionStage = 'Unsolved' | 'Solved' | 'Revision 1' | 'Revision 2' | 'Revision 3' | 'Mastered';

export interface Problem {
  id: string;
  title: string;
  topic: string;
  difficulty: Difficulty;
  problemSet: string;
  link: string;
  solved: boolean;
  dateSolved?: string;
  timeSpent?: number;
  revisionStage: RevisionStage;
  nextRevisionDate?: string;
  notes?: string;
  tags?: string[];
}

export interface ProblemSet {
  id: string;
  name: string;
  totalProblems: number;
  lastActivity?: string;
}

export interface Activity {
  date: string;
  count: number;
  level: number;
}
