import React from 'react';
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Assignment {
  title: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: Assignment[];
  createdCount: number;
  completedCount: number;
  deleteAssignment: (index: number) => void;
  toggleCompletion: (index: number) => void;
}

export const Assignments: React.FC<AssignmentsProps> = ({ assignments, createdCount, completedCount, deleteAssignment, toggleCompletion }) => {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {createdCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment 
            key={index} 
            title={assignment.title} 
            completed={assignment.completed}
            onDelete={() => deleteAssignment(index)}
            onToggleCompletion={() => toggleCompletion(index)}
          />
        ))}
      </div>
    </section>
  );
}