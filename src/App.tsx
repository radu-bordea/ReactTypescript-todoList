import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(""); // State for the current todo item
  const [todos, setTodos] = useState<Todo[]>([]); // State for the list of todos

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      // Create a new todo item and add it to the list of todos
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(""); // Reset the todo input field
    }
  };

  console.log(todos); // Log the list of todos

  return (
    <div className="App">
      <span className="heading">Task List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* Render the list of todos */}
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
