// src/App.js
import React from 'react';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  // Sample student data with isPlaced prop
  const students = [
    { name: "John Doe", branch: "CSE", year: 3, isPlaced: true },
    { name: "Jane Smith", branch: "ECE", year: 2, isPlaced: false },
    { name: "Mike Johnson", branch: "CSE", year: 4, isPlaced: true }
  ];

  return (
    <div className="App">
      <Header />
      <div className="students-container">
        {students.map((student, index) => (
          <StudentCard 
            key={index}
            name={student.name}
            branch={student.branch}
            year={student.year}
            isPlaced={student.isPlaced}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
