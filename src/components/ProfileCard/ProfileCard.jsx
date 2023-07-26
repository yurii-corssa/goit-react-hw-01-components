import PropTypes from 'prop-types';

import {
  Avatar,
  CardFooter,
  Description,
  Location,
  Name,
  Profile,
  StatsItem,
  StatsItemLabel,
  StatsItemQuantity,
  StatsList,
  Tag,
} from './ProfileCard.styled';

export const ProfileCard = ({ data }) => {
  const defaultAvatar =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

  const { username, tag, location, avatar = defaultAvatar, stats } = data;

  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <CardFooter>
        <StatsList>
          <StatsItem>
            <StatsItemLabel>Followers</StatsItemLabel>
            <StatsItemQuantity>{stats.followers}</StatsItemQuantity>
          </StatsItem>
          <StatsItem>
            <StatsItemLabel>Views</StatsItemLabel>
            <StatsItemQuantity>{stats.views}</StatsItemQuantity>
          </StatsItem>
          <StatsItem>
            <StatsItemLabel>Likes</StatsItemLabel>
            <StatsItemQuantity>{stats.likes}</StatsItemQuantity>
          </StatsItem>
        </StatsList>
      </CardFooter>
    </Profile>
  );
};

ProfileCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};
