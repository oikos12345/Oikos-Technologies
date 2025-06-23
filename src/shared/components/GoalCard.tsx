import { useState } from 'react';

type GoalCardProps = {
  label: string;
  hover: string;
  className: string;
};

const GoalCard: React.FC<GoalCardProps> = ({ label, hover, className }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${className} ${hovered ? 'hovered' : ''}`}
      data-default={label}
      data-hover={hover}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? hover : label}
    </div>
  );
};

export default GoalCard;
