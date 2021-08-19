import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState([
    {
      name: 'Arto Hellas',
    },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (people.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phone book`);
      return;
    }

    setPeople([
      ...people,
      {
        name: newName,
        phone: newPhoneNumber,
      },
    ]);

    setNewName('');
    setNewPhoneNumber('');
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              value={newPhoneNumber}
              onChange={(event) => setNewPhoneNumber(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {people.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
}

export default App;
