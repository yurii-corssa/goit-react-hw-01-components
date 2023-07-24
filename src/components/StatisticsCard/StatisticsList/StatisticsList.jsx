import PropTypes from 'prop-types';
import { ListItem, ListLabel, ListPercentage } from './StatisticsList.styled';

export const StatisticsList = ({ data }) => {
  return data.map(elem => {
    const { id, label, percentage } = elem;
    return (
      <ListItem key={id}>
        <ListLabel>{label}</ListLabel>
        <ListPercentage>{percentage}</ListPercentage>
      </ListItem>
    );
  });
};

StatisticsList.propTypes = {
  name: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
