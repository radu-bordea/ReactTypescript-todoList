import React from "react"; // Importing React library
import "./styles.css"; // Importing the styles for this component
import { Todo } from "../model"; // Importing the Todo type from model
import Card from "./Card"; // Importing the Card component

interface Props {
  todos: Todo[]; // List of all todo items
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the list of todo items
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos"> {/* Container for the list of todo items */}
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        // Rendering a Card component for each todo item in the list
      ))}
    </div>
  );
};

export default TodoList; // Exporting the TodoList component as the default export
