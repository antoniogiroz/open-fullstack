import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MostVoted } from './MostVoted';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});

  const selectedPoints = () => {
    return points[selected] || 0;
  };

  const mostVoted = Object.entries(points).reduce(
    (maxIndex, [key, value]) => (points[maxIndex] > value ? maxIndex : key),
    undefined
  );

  const handleNext = () => {
    setSelected(getRandomInt(0, anecdotes.length - 1));
  };

  const handleVote = () => {
    setPoints({
      ...points,
      [+selected]: selectedPoints() + 1,
    });
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {selectedPoints()} votes</div>
      <button onClick={handleNext}>Next anecdote</button>
      <button onClick={handleVote}>Vote anecdote</button>

      {mostVoted !== undefined ? (
        <MostVoted anecdote={anecdotes[mostVoted]} />
      ) : null}
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
