import { List } from './List';
import statisticsData from '../../data.json';

export const StatisicsCard = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statisticsData.map(elem => {
          return (
            <List
              lable={elem.lable}
              percentage={elem.percentage}
              key={elem.id}
            />
          );
        })}
      </ul>
    </section>
  );
};
