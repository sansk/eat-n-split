import { useState } from "react";
import Button from "./Button.component";

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label htmlFor="bill">💰 Bill Amount</label>
      <input
        type="text"
        name="bill"
        id="bill"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label htmlFor="you">🧑 Your Expense </label>
      <input
        type="text"
        name="you"
        id="you"
        value={paidByUser}
        onChange={(e) =>
          setpaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friend">👲 {selectedFriend.name}'s Expense</label>
      <input
        type="text"
        name="friend"
        id="friend"
        disabled
        value={paidByFriend}
      />

      <label htmlFor="who">🤑 Who is Paying the bill?</label>
      <select
        name="who"
        id="who"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
