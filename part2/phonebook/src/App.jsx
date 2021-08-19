import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [search, setSearch] = useState('');

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

  const filterPeople = people.filter((person) =>
    person.name.toLowerCase().match(search.toLowerCase())
  );

  return (
    <div>
      <h1>PhoneBook</h1>

      <div>
        Search:
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <h2>Add new contact</h2>
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

      <h2>Contacts</h2>
      {filterPeople.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
}

export default App;
