import { ProfileCard } from './ProfileCard/ProfileCard';
import { StatisicsCard } from './StatisticsCard/StatisticsCard';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from './ProfileCard/user.json';

export const App = () => {
  return (
    <>
      <ProfileCard data={userData} />
      <StatisicsCard />
      <FriendList />
      <TransactionHistory />
    </>
  );
};
