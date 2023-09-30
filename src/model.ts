// Interface defining the structure of a Todo item
export interface Todo {
    id: number;      // Unique identifier for the todo item
    todo: string;    // Description of the todo item
    isDone: boolean; // Indicates if the todo item is marked as done
}
