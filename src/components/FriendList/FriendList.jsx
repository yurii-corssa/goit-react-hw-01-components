import { FriendListItem } from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ data }) => {
  return (
    <List>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired
  ).isRequired,
};
