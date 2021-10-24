export function Filter({ handleSearch }) {
  return (
    <div>
      Search:
      <input onChange={(event) => handleSearch(event.target.value)} />
    </div>
  );
}
