import React from "react";
import "./styles.css";

// Define the expected properties for the InputField component
interface Props {
  todo: string; // Current todo value
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to set todo value
  handleAdd: (e: React.FormEvent) => void; // Function to handle the form submission
}

// InputField component
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      {/* Input field */}
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      {/* Submit button */}
      <button className="input__submit">Save</button>
    </form>
  );
};

export default InputField;
