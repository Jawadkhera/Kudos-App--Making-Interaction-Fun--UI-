import { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Feed } from './components/feed/Feed';
import { TeamAnalytics } from './components/analytics/TeamAnalytics';
import { RewardsShop } from './components/rewards/RewardsShop';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <DashboardLayout
      activePage={activePage}
      onNavigate={setActivePage}
      showRightPanel={activePage === 'Home'}
    >
      {activePage === 'Home' && <Feed />}
      {activePage === 'Team Analytics' && <TeamAnalytics />}
      {activePage === 'Rewards Shop' && <RewardsShop />}
    </DashboardLayout>
  );
}

export default App;
