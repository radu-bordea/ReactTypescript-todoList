import React, { useRef } from "react";
import "./styles.css";

// Defining the props interface for the InputField component.
interface props {
  todo: string; // The current todo input.
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to update the todo input.
  handleAdd: (e: React.FormEvent) => void; // Function to handle adding a new todo.
}

// Defining the InputField functional component that takes specific props.
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  // Creating a reference to the input element for focusing.
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    // Returning JSX for a form with an input field and a submit button.
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e); // Handling the form submission.
        inputRef.current?.blur(); // Blurring the input field after submission.
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)} // Handling changes in the input field.
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

// Exporting the InputField component as the default export of this module.
export default InputField;
