import {
  ListAvatar,
  ListItem,
  ListName,
  ListStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem>
      <ListStatus data-is-online={isOnline}></ListStatus>
      <ListAvatar src={avatar} alt={name} width={58} height={58} />
      <ListName>{name}</ListName>
    </ListItem>
  );
};
