import React from 'react';

export function Filter({ handleSearch }) {
  return (
    <div>
      Search:
      <input onChange={(event) => handleSearch(event.target.value)} />
    </div>
  );
}
