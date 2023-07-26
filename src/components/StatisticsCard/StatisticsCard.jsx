import { StatisticsList } from './StatisticsList/StatisticsList';
import PropTypes from 'prop-types';
import { Section, Title } from './StatisticsCard.styled';

export const StatisicsCard = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticsList data={data} />
    </Section>
  );
};

StatisicsCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
