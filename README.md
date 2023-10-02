ReactTypescript-todoList
This is a task management application built using React and TypeScript. It provides a user-friendly interface for creating, editing, and deleting tasks. The app also features drag-and-drop functionality, allowing users to effortlessly transition tasks between the active and completed sections.

Getting Started
To get started, follow these steps:

Create a React app with TypeScript using the following command:

- npx create-react-app ReactTypescript-todoList --template typescript

Install the required dependencies and libraries:
- npm install react-icons
- npm i react-beautiful-dnd
- npm i @types/react-beautiful-dnd

Features
- Task Creation: Users can easily create new tasks, providing a title and optional details for each.
- Task Management: Tasks can be edited to update their title or details, and can also be deleted if no longer needed.
- Drag-and-Drop Functionality: The app leverages the React Beautiful DND library to enable seamless dragging and dropping of tasks, enhancing task organization and prioritization.
- Local Storage Integration: Task data is persisted using local storage, ensuring tasks are retained even if the user refreshes the page or closes the browser.

Application Architecture
The application is structured with the following components:
- InputField: Facilitates the creation of new tasks by providing an input field for the task title and details.
- TodoList: Renders the list of tasks, both active and completed. It also manages the drag-and-drop functionality to enable task movement.
- Card: Represents an individual task item. It displays the task title and details and provides options for editing and deleting tasks.
- Styles: Holds the CSS styles for the various components, ensuring a visually appealing and consistent user interface.

model.ts: Defines the interface for the data model, ensuring a standardized structure for task objects.

Usage
- To start the development server, run npm start.
- To build the project for production, run npm run build.