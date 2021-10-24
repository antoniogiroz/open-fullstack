import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState('');
  // const [showAll, setShowAll] = useState(true);

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:3001/notes');
    setNotes(data);
  }, []);

  console.log('render', notes.length, 'notes');

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
  );
}

export default App;
