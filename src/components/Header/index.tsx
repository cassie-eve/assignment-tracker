import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface HeaderProps {
  addAssignment: (title: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ addAssignment }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trimStart());
  };

  const handleAddAssignment = () => {
    if (inputValue.trim() !== "") {
      addAssignment(inputValue);
      setInputValue("");
    }
  };

  const isButtonDisabled = inputValue.trim() === "";

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
        className={styles.newAssignmentForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddAssignment();
        }}
      >
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={isButtonDisabled ? styles.disabledButton : ""}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}