import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppStore';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ProblemSets } from './pages/ProblemSets';
import { Problems } from './pages/Problems';
import { RevisionQueue } from './pages/RevisionQueue';
import { Notes } from './pages/Notes';
import { Analytics } from './pages/Analytics';
import { Achievements } from './pages/Achievements';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Settings';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="problem-sets" element={<ProblemSets />} />
            <Route path="problems" element={<Problems />} />
            <Route path="revisions" element={<RevisionQueue />} />
            <Route path="notes" element={<Notes />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
