import friends from './friends.json';

export const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className={name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
