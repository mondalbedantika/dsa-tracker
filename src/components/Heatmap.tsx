import { ActivityCalendar } from 'react-activity-calendar';
import type { ThemeInput } from 'react-activity-calendar';
import { useAppStore } from '../context/AppStore';

export const Heatmap = () => {
  const { activities } = useAppStore();

  const explicitTheme: ThemeInput = {
    light: ['#162e27', '#2a4f31', '#416747', '#6e855a', '#adc56c'],
    dark: ['#162e27', '#2a4f31', '#416747', '#6e855a', '#adc56c'],
  };

  // Mock data if activities is empty
  const data = activities.length > 0 ? activities : [
    { date: '2026-08-01', count: 1, level: 1 },
    { date: '2026-08-05', count: 3, level: 2 },
    { date: '2026-08-10', count: 5, level: 3 },
    { date: '2026-08-14', count: 8, level: 4 },
  ];

  return (
    <div className="bg-surface-bright border border-primary/30 rounded-lg p-6">
      <h2 className="text-lg font-sans font-semibold text-on-surface mb-4">Activity Heatmap</h2>
      <div className="flex justify-center p-4 border border-outline-variant/30 rounded-md bg-surface-container-lowest">
        <ActivityCalendar 
          data={data} 
          theme={explicitTheme}
          colorScheme="dark"
          labels={{
            legend: {
              less: 'Less',
              more: 'More'
            },
            months: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            totalCount: '{{count}} problems solved in {{year}}'
          }}
        />
      </div>
    </div>
  );
};
