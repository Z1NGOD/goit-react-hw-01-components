import { PropTypes } from "prop-types";
import {
  MainDiv,
  DescriptionDiv,
  Avatar,
  MainText,
  SecondaryText,
  Name,
  StatsList,
  StatsListComponent,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <MainDiv>
      <DescriptionDiv>
        <Avatar src={avatar} />
        <Name>{username}</Name>
        <SecondaryText>@{tag}</SecondaryText>
        <SecondaryText>{location}</SecondaryText>
      </DescriptionDiv>
      <StatsList stats={stats}>
        <StatsListComponent>
          <SecondaryText>Followers</SecondaryText>
          <MainText>{stats.followers}</MainText>
        </StatsListComponent>
        <StatsListComponent>
          <SecondaryText>Views</SecondaryText>
          <MainText>{stats.views}</MainText>
        </StatsListComponent>
        <StatsListComponent>
          <SecondaryText>Likes</SecondaryText>
          <MainText>{stats.likes}</MainText>
        </StatsListComponent>
      </StatsList>
    </MainDiv>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
