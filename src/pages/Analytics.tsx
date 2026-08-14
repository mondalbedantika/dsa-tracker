import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const Analytics = () => {

  // Mock data for charts
  const weeklyData = [
    { name: 'Mon', solved: 2 },
    { name: 'Tue', solved: 5 },
    { name: 'Wed', solved: 3 },
    { name: 'Thu', solved: 7 },
    { name: 'Fri', solved: 4 },
    { name: 'Sat', solved: 10 },
    { name: 'Sun', solved: 8 },
  ];

  const topicData = [
    { name: 'Arrays', count: 12 },
    { name: 'Strings', count: 8 },
    { name: 'Two Pointers', count: 6 },
    { name: 'Trees', count: 4 },
    { name: 'DP', count: 2 },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-sans font-semibold text-on-surface">Analytics</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Visualize your performance and consistency.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart for Weekly Progress */}
        <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
          <h2 className="text-lg font-sans font-semibold text-on-surface mb-6">Problems Solved (This Week)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#213932" vertical={false} />
                <XAxis dataKey="name" stroke="#8c938a" tick={{ fontSize: 12, fill: '#8c938a' }} axisLine={false} tickLine={false} />
                <YAxis stroke="#8c938a" tick={{ fontSize: 12, fill: '#8c938a' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#001711', borderColor: '#3a5f40', borderRadius: '8px' }}
                  itemStyle={{ color: '#a7d1aa' }}
                />
                <Line type="monotone" dataKey="solved" stroke="#adc56c" strokeWidth={3} dot={{ fill: '#adc56c', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart for Topic Distribution */}
        <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
          <h2 className="text-lg font-sans font-semibold text-on-surface mb-6">Completion by Topic</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#213932" vertical={false} />
                <XAxis dataKey="name" stroke="#8c938a" tick={{ fontSize: 12, fill: '#8c938a' }} axisLine={false} tickLine={false} />
                <YAxis stroke="#8c938a" tick={{ fontSize: 12, fill: '#8c938a' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#001711', borderColor: '#3a5f40', borderRadius: '8px' }}
                  itemStyle={{ color: '#a7d1aa' }}
                  cursor={{ fill: '#213932' }}
                />
                <Bar dataKey="count" fill="#3a5f40" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
            <h3 className="text-sm font-sans font-medium text-on-surface-variant mb-1">Strongest Topic</h3>
            <p className="text-2xl font-sans font-semibold text-primary">Arrays</p>
         </div>
         <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
            <h3 className="text-sm font-sans font-medium text-on-surface-variant mb-1">Weakest Topic</h3>
            <p className="text-2xl font-sans font-semibold text-error">Dynamic Programming</p>
         </div>
         <div className="bg-surface-bright border border-outline-variant rounded-lg p-6">
            <h3 className="text-sm font-sans font-medium text-on-surface-variant mb-1">Average Solving Time</h3>
            <p className="text-2xl font-sans font-semibold text-secondary">24 mins</p>
         </div>
      </div>
    </div>
  );
};
