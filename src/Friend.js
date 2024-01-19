import Button from './Button';

export default function Friend({
  name,
  image,
  balance,
  onSelection,
  selectedFriend,
}) {
  return (
    <li className={name === selectedFriend ? 'selected' : ''}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance < 0 ? 'red' : balance === 0 ? '' : 'green'}>
        {balance < 0 && `You owe ${name} $${Math.abs(balance)}`}
        {balance === 0 && `You and ${name} are even`}
        {balance > 0 && `${name} owes you $${balance}`}
      </p>
      <Button handleClick={() => onSelection(name)}>
        {name === selectedFriend ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
