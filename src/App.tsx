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

  const createdCount = assignments.length;
  const completedCount = assignments.filter(assignment => assignment.completed).length;

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments assignments={assignments} createdCount={createdCount} completedCount={completedCount} />
    </>
  );
}

export default App;