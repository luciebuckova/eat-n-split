import Button from './Button';
import { useState } from 'react';

export default function AddFriend({ onAddFriend }) {
  const [addFriend, setAddFriend] = useState('');
  const [addImage, setAddImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();
    if (!addFriend || !addImage) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: addFriend,
      image: `${addImage}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setAddFriend('');
    setAddImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={addFriend}
        onChange={(e) => setAddFriend(e.target.value)}
      />
      <label>🏞️ Image URL</label>
      <input
        type="text"
        value={addImage}
        onChange={(e) => setAddImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
