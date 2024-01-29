import { useState } from 'react';
import AddFriend from './AddFriend';
import Button from './Button';
import FriendsList from './FriendsList';
import SplitABill from './SplitABill';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [showForm, setshowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setselectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setshowForm(false);
  }

  function handleSelection(friend) {
    setselectedFriend(friend === selectedFriend ? null : friend);
    setshowForm(false);
  }

  function handleSplit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.name === selectedFriend
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setselectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showForm && <AddFriend onAddFriend={handleAddFriend} />}
        <Button handleClick={() => setshowForm((show) => !show)}>
          {showForm ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitABill
          selectedFriend={selectedFriend}
          onSplit={handleSplit}
          key={selectedFriend}
        />
      )}
    </div>
  );
}
