import PropTypes from "prop-types";
import { List, ListItem, Status, Avatar, Name } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map((friend) => (
        <ListItem className="item" key={friend.id}>
          <Status className="status" isOnline={friend.isOnline} />
          <Avatar className="avatar" src={friend.avatar} alt="User avatar" />
          <Name className="name">{friend.name}</Name>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
