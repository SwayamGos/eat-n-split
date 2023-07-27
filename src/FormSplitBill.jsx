import { useState } from "react";
import Button from "./button";

export default function FormSplitBill({ selectedFriend, friends }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("user");

  function splitBill(e) {
    e.preventDefault();
    console.log(payer);
    if (payer === "user")
      friends((f) =>
        f.map((friend) => {
          return friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance + (bill - expense) }
            : friend;
        })
      );
    else
      friends((f) =>
        f.map((friend) => {
          return friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance - (bill - expense) }
            : friend;
        })
      );
  }

  return (
    <form action='' className='form-split-bill' onSubmit={(e) => splitBill(e)}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor=''>💰 Bill Value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor=''>🧍🏻‍♂️ Your Expense</label>
      <input
        type='text'
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      />

      <label htmlFor=''>👭 {selectedFriend.name}'s Expense</label>
      <input type='text' disabled value={bill - expense} />

      <label htmlFor=''>Who is paying the bill ?</label>
      <select
        name=''
        id=''
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
