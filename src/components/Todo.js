import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


function Todo({inputText,setTodos,todos,todo}) {

    const deleteHandler =() => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const onCompleteClick =() => {
        setTodos(todos.map(element => {
            if (element.id === todo.id) {
                return {...element, completed: !element.completed }
            }
            return element
        }))
    }

    return(
        <div className="todo">
             <button className="complete-btn" onClick={onCompleteClick}> <FontAwesomeIcon icon={faCircleCheck} /> </button>
                <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{inputText}</li>
             <button className="trash-btn" onClick={deleteHandler}> <FontAwesomeIcon icon={faTrash} /></button>
        </div>

    )
}

export default Todo


