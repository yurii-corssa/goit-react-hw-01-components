import {
  List,
  ListItem,
  ListLabel,
  ListPercentage,
} from './StatisticsList.styled';

export const StatisticsList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id}>
            <ListLabel>{label}</ListLabel>
            <ListPercentage>{percentage}</ListPercentage>
          </ListItem>
        );
      })}
    </List>
  );
};
