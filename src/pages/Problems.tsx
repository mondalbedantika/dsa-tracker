import { useState } from 'react';
import { useAppStore } from '../context/AppStore';
import { Search, Filter, CheckCircle2, Circle } from 'lucide-react';

export const Problems = () => {
  const { problems, markSolved } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProblems = problems.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Easy': return 'bg-primary-container/30 text-[#adc56c]';
      case 'Medium': return 'bg-secondary-container/30 text-secondary';
      case 'Hard': return 'bg-[#d9e9c1]/10 text-[#d9e9c1]';
      default: return 'bg-surface-container text-on-surface';
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-sans font-semibold text-on-surface">Problems</h1>
          <p className="text-on-surface-variant mt-2 text-sm">Comprehensive problem index.</p>
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-outline" />
          <input 
            type="text" 
            placeholder="Search problems..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-bright border border-outline-variant text-on-surface text-sm rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-[#adc56c] transition-colors"
          />
        </div>
        <button className="bg-surface-bright border border-outline-variant hover:bg-surface-container transition-colors text-on-surface px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-surface-bright border border-outline-variant rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm font-sans">
          <thead className="bg-surface-container-high border-b border-outline-variant text-on-surface-variant">
            <tr>
              <th className="px-6 py-4 font-medium w-16">Status</th>
              <th className="px-6 py-4 font-medium">Problem</th>
              <th className="px-6 py-4 font-medium">Topic</th>
              <th className="px-6 py-4 font-medium">Difficulty</th>
              <th className="px-6 py-4 font-medium">Revision</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filteredProblems.map((problem) => (
              <tr key={problem.id} className="hover:bg-surface-container transition-colors group">
                <td className="px-6 py-4 cursor-pointer" onClick={() => !problem.solved && markSolved(problem.id)}>
                  {problem.solved ? (
                    <CheckCircle2 className="w-5 h-5 text-[#adc56c]" />
                  ) : (
                    <Circle className="w-5 h-5 text-outline-variant group-hover:text-primary transition-colors" />
                  )}
                </td>
                <td className="px-6 py-4 font-medium text-on-surface">{problem.title}</td>
                <td className="px-6 py-4 text-on-surface-variant">{problem.topic}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-mono font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-mono">
                    {problem.revisionStage}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:text-primary-fixed text-xs font-mono transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
            {filteredProblems.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-on-surface-variant">
                  No problems found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
