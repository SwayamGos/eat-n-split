import { useState } from "react";
import Button from "./button";

export default function Friend({ friend, onSelect, activeFriend }) {
  const [splitActive, setSplitActive] = useState(false);

  function splitBill() {
    setSplitActive((s) => !s);

    if(!splitActive) onSelect({...friend, active:true})
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onAdd={splitBill}>
        {((friend.id === activeFriend.id) && splitActive) ? "Close" : "Select"}
      </Button>
    </li>
  );
}
