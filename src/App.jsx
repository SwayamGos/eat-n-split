import { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [friendForm, setFriendForm] = useState(false);
  const [activeFriend, setActiveFriend] = useState({active: false});
  console.log(activeFriend)

  function toggleAddForm () {
    setFriendForm((f) => !f);
  }

  function addNewFriend(friend) {
    setFriends((f) => [...f, friend]);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelect={setActiveFriend} activeFriend={activeFriend}/>
        {friendForm && <FormAddFriend onAddFriend={addNewFriend} toggleAddForm={toggleAddForm}/>}
        <Button onAdd={toggleAddForm}>
          {friendForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {(activeFriend.active && <FormSplitBill selectedFriend={activeFriend} friends={setFriends}/>)}
    </div>
  );
}

export default App;
