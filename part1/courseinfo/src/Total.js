export const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return (
    <p>
      <strong>Number of exercises {totalExercises}</strong>
    </p>
  );
};
