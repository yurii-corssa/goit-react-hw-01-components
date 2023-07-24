import { StatisticsList } from './StatisticsList/StatisticsList';
import statisticsData from './data.json';

import { List, Section, Title } from './StatisticsCard.styled';

export const StatisicsCard = () => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        <StatisticsList data={statisticsData} />
      </List>
    </Section>
  );
};
