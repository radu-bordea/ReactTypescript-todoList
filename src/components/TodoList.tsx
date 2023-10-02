import React from "react";
import { Todo } from "../models/models"; 
import SingleTodo from "./Card"; 
import { Droppable } from "react-beautiful-dnd"; 

// Defining the props interface for the TodoList component.
interface props {
  todos: Array<Todo>; // Array of active todos.
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>; // Function to update active todos.
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>; // Function to update completed todos.
  CompletedTodos: Array<Todo>; // Array of completed todos.
}

// Defining the TodoList functional component that takes specific props.
const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    // Returning JSX for the container that holds the list of active and completed todos.
    <div className="container">
      {/* Droppable component for active todos */}
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} // Adding a class based on drag state.
            ref={provided.innerRef} // Referencing the droppable container.
            {...provided.droppableProps} // Droppable props.
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              // Rendering SingleTodo component for each active todo.
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder} {/* Placeholder for drag and drop */}
          </div>
        )}
      </Droppable>

      {/* Droppable component for completed todos */}
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef} // Referencing the droppable container.
            {...provided.droppableProps} // Droppable props.
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`} // Adding a class based on drag state.
          >
            <span className="todos__heading">Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              // Rendering SingleTodo component for each completed todo.
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder} {/* Placeholder for drag and drop */}
          </div>
        )}
      </Droppable>
    </div>
  );
};

// Exporting the TodoList component as the default export of this module.
export default TodoList;
