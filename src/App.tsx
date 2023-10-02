import React, { useState } from "react";
import "./App.css";

// Importing InputField and TodoList components.
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

// Importing DragDropContext and DropResult for drag-and-drop functionality.
import { DragDropContext, DropResult } from "react-beautiful-dnd";

// Importing Todo type from external models.
import { Todo } from "./models/models";

// Defining the functional component named App.
const App: React.FC = () => {
  // State variables for todo input, active todos, and completed todos.
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  // Function to handle adding a new todo.
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // Function to handle drag-and-drop events.
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  // Returning JSX for the App component.
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        {/* Rendering InputField component with specific props */}
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {/* Rendering TodoList component with specific props */}
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

// Exporting the App component as the default export of this module.
export default App;
