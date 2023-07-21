import { ProfileCard } from './ProfileCard/';
import { StatisicsCard } from './StatisticsCard';
import { FriendList } from './FriendList';
import userData from '../user.json';

const { username, tag, location, avatar, stats } = userData;

export const App = () => {
  return (
    <>
      <ProfileCard
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <StatisicsCard />
      <FriendList />
    </>
  );
};
