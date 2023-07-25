import { ProfileCard } from './ProfileCard/ProfileCard';
import { StatisicsCard } from './StatisticsCard/StatisticsCard';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from './ProfileCard/user.json';
import friends from './FriendList/friends.json';
import statisticsData from './StatisticsCard/data.json';
import dataTransactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <ProfileCard data={userData} />
      <StatisicsCard title={'Upload stats'} data={statisticsData} />
      <FriendList data={friends} />
      <TransactionHistory data={dataTransactions} />
    </>
  );
};
