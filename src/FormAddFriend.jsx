import { useState } from "react";
import Button from "./button";

export default function FormAddFriend({ onAddFriend, toggleAddForm }) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImg, setNewFriendImg] = useState("https://i.pravatar.cc/48");

  function addFormFriend(e) {
    e.preventDefault();

    const friend = {
      id: Math.floor(100000 + Math.random() * 900000),
      name: newFriendName,
      image: newFriendImg,
      balance: 0,
    };

    onAddFriend(friend);
    toggleAddForm();
  }

  return (
    <form
      action=''
      className='form-add-friend'
      onSubmit={(e) => addFormFriend(e)}
    >
      <label htmlFor=''>👬Friend name</label>
      <input
        type='text'
        value={newFriendName}
        onChange={(e) => setNewFriendName(e.target.value)}
      />

      <label htmlFor=''>🌆 Image Url</label>
      <input
        type='text'
        value={newFriendImg}
        onChange={(e) => setNewFriendImg(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
