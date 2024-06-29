import { useState } from "react";
import Button from "./Button.component";

const FormAddFriend = ({ handleAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleAddNewFriend = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    handleAddFriend(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddNewFriend}>
      <label htmlFor="name">👩🏻‍🤝‍🧑🏻 Friend Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="url">🏷 Image URL</label>
      <input
        type="url"
        name="url"
        id="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
