import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

interface Assignment {
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (title: string) => {
    setAssignments([...assignments, { title, completed: false }]);
  };

  const deleteAssignment = (index: number) => {
    setAssignments(assignments.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index: number) => {
    setAssignments(assignments.map((assignment, i) => (
      i === index ? { ...assignment, completed: !assignment.completed } : assignment
    )));
  };

  const createdCount = assignments.length;
  const completedCount = assignments.filter(assignment => assignment.completed).length;

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments 
        assignments={assignments} 
        createdCount={createdCount} 
        completedCount={completedCount}
        deleteAssignment={deleteAssignment}
        toggleCompletion={toggleCompletion}
      />
    </>
  );
}

export default App;