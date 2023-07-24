import friends from './friends.json';

import {
  List,
  ListAvatar,
  ListItem,
  ListName,
  ListStatus,
} from './FriendList.styled';

export const FriendList = () => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <ListItem key={id}>
            <ListStatus data-isonline={isOnline}></ListStatus>
            <ListAvatar src={avatar} alt={name} width={58} height={58} />
            <ListName>{name}</ListName>
          </ListItem>
        );
      })}
    </List>
  );
};
