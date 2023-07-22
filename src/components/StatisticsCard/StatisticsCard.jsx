import { StatisticsList } from './StatisticsList/StatisticsList';
import statisticsData from './data.json';

export const StatisicsCard = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <StatisticsList data={statisticsData} />
      </ul>
    </section>
  );
};
