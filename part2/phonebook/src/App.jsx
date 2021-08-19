import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState([
    {
      name: 'Arto Hellas',
    },
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPeople([
      ...people,
      {
        name: newName,
      },
    ]);
    setNewName('');
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {people.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
}

export default App;
