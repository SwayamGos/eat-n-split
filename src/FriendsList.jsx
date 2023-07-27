import Friend from "./Friend";

export default function FriendsList({ friends, onSelect, activeFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelect={onSelect} activeFriend={activeFriend}/>
      ))}
    </ul>
  );
}
