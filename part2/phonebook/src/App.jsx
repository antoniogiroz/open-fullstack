import React, { useState } from 'react';
import { Filter } from './Filter';
import { PersonForm } from './PersonForm';
import { PersonList } from './PersonList';

function App() {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);
  const [search, setSearch] = useState('');

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const filterPeople = people.filter((person) =>
    person.name.toLowerCase().match(search.toLowerCase())
  );

  return (
    <div>
      <h1>PhoneBook</h1>

      <Filter handleSearch={(term) => setSearch(term)} />

      <h2>Add new contact</h2>
      <PersonForm people={people} addPerson={addPerson} />

      <h2>Contacts</h2>
      <PersonList people={filterPeople} />
    </div>
  );
}

export default App;
