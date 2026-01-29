// src/components/StudentCard.js
import React from 'react';
import StatusBadge from './StatusBadge';

const StudentCard = ({ name, branch, year, isPlaced }) => {
  // Destructuring props directly in function parameters (Task 4)
  
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Branch: {branch}</p>
      <p>Year: {year}</p>
      {/* Task 5: Conditional rendering using ternary operator */}
      <StatusBadge isPlaced={isPlaced} />
    </div>
  );
};

export default StudentCard;
// src/components/StatusBadge.js