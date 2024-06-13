import React from 'react';
import { TbTrash } from "react-icons/tb";
import styles from "./assignment.module.css";

interface AssignmentProps {
  title: string;
  completed: boolean;
  onDelete: () => void;
}

export const Assignment: React.FC<AssignmentProps> = ({ title, completed, onDelete }) => {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}