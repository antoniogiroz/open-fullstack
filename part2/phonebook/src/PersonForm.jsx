import React, { useState } from 'react';

export function PersonForm({ people, addPerson }) {
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (people.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phone book`);
      return;
    }

    addPerson({
      name: newName,
      phone: newPhoneNumber,
    });

    setNewName('');
    setNewPhoneNumber('');
  };

  return (
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
  );
}
