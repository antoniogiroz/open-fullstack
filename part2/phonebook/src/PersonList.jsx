export function PersonList({ people }) {
  return (
    <div>
      {people.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
}
