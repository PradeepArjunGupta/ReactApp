// src/components/StatusBadge.js
const StatusBadge = ({ isPlaced }) => {
  return (
    <span className={`status-badge ${isPlaced ? 'placed' : 'not-placed'}`}>
      {isPlaced ? "Placed" : "Not Placed"}
    </span>
  );
};

export default StatusBadge;
