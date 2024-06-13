import React from 'react';
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "./assignment.module.css";

interface AssignmentProps {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

export const Assignment: React.FC<AssignmentProps> = ({ title, completed, onDelete, onToggleCompletion }) => {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onToggleCompletion}>
        {completed ? <BsCheckCircleFill className={styles.completedIcon} /> : <div />}
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}