import React from 'react'
import { Todo } from '../model'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

type Props = {
    todo: Todo, // The individual todo item to display.
    todos:Todo[], // The list of all todo items.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the list of todo items.
}

const Card = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo} {/* Displays the text of the todo item. */}
        </span>
        <div>
            <span className="icon">
                <AiFillEdit/> {/* Icon for editing the todo item. */}
            </span>
            <span className="icon">
                <AiFillDelete/> {/* Icon for deleting the todo item. */}
            </span>
            <span className="icon">
                <MdDone/> {/* Icon for marking the todo item as done. */}
            </span>
        </div>
    </form>
  )
}

export default Card
