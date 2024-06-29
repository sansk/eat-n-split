import Friend from "./Friend.component";

const FriendsList = ({ friends, handleSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
