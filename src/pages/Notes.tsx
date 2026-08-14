import { useState } from 'react';
import { useAppStore } from '../context/AppStore';
import { Save, Code, AlertTriangle, Lightbulb } from 'lucide-react';

export const Notes = () => {
  const { problems, updateNotes } = useAppStore();
  const [selectedProblem, setSelectedProblem] = useState(problems[0]?.id || '');
  const [noteContent, setNoteContent] = useState(problems[0]?.notes || '');

  const handleSave = () => {
    updateNotes(selectedProblem, noteContent);
    // In a real app, this would show a toast
  };

  const templates = [
    { name: 'Approach', icon: Lightbulb },
    { name: 'Edge Cases', icon: AlertTriangle },
    { name: 'Complexity', icon: Code },
  ];

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Coding Journal</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Document your approaches and mistakes.</p>
      </header>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Problem List Sidebar */}
        <div className="w-1/3 bg-surface-bright border border-outline-variant rounded-lg overflow-y-auto">
          <div className="p-4 border-b border-outline-variant sticky top-0 bg-surface-bright">
            <h2 className="font-sans font-medium text-on-surface">Problems</h2>
          </div>
          <div className="divide-y divide-outline-variant">
            {problems.map((p) => (
              <div 
                key={p.id}
                onClick={() => {
                  setSelectedProblem(p.id);
                  setNoteContent(p.notes || '');
                }}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedProblem === p.id 
                    ? 'bg-primary-container/20 border-l-4 border-primary' 
                    : 'hover:bg-surface-container border-l-4 border-transparent'
                }`}
              >
                <div className="font-medium text-sm text-on-surface">{p.title}</div>
                <div className="text-xs font-mono text-on-surface-variant mt-1">{p.topic}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-surface-bright border border-outline-variant rounded-lg flex flex-col">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
            <div className="flex space-x-2">
              {templates.map(t => (
                <button 
                  key={t.name}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
                >
                  <t.icon className="w-3.5 h-3.5 text-secondary" />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-on-primary rounded-md text-sm font-medium hover:bg-primary-fixed transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Note</span>
            </button>
          </div>
          <div className="flex-1 p-0">
            <textarea
              className="w-full h-full p-6 bg-transparent resize-none focus:outline-none text-on-surface font-mono text-sm leading-relaxed"
              placeholder="Write your approach, time complexity, and edge cases here... Markdown supported."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
