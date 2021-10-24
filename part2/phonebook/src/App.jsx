import { useEffect, useState } from 'react';
import axios from 'axios';
import { Filter } from './Filter';
import { PersonForm } from './PersonForm';
import { PersonList } from './PersonList';

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:3001/persons');
    setPeople(data);
  }, []);

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
