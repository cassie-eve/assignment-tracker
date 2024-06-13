import React from 'react';
import { TbTrash } from "react-icons/tb";
import styles from "./assignment.module.css";

interface AssignmentProps {
  title: string;
  completed: boolean;
}

export const Assignment: React.FC<AssignmentProps> = ({ title, completed }) => {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}