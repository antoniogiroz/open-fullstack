import { Part } from './Part';

export const Content = ({ parts }) => {
  const [part1, part2, part3] = parts;

  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
};
