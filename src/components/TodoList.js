import React, {useEffect} from "react";
import {useState} from "react";
import "../style.css"
import {findAllByLabelText, logDOM} from "@testing-library/react";


const TodoList = ({todos, setTodos,filterTodos}) => {


    const [leftTodoCount, setLeftTodoCount] = useState(0);

    useEffect(() => {
        const unCompletedTodos = todos.filter((todo) => todo.completed===false);
        setLeftTodoCount(unCompletedTodos.length);
    }, [filterTodos]);

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
     setTodos(todos.map((item)=>{
         if (item.id === todo.id){
             return {...item,completed:!item.completed}
         }
         return item
     }))
    }




    return (
        <div style={{marginTop: '20px'}}>
            {filterTodos.map((todo) => (
                    <li className='todo-list' key={todo.id}>
                        <div style={{display:'flex'}}>
                        <div>
                            <input type='checkbox' className='delete' onClick={() => handleComplete(todo)}/>
                        </div>
                        <input type="text" className='list' value={todo.title} onChange={(event)=>event.preventDefault()} style={{textDecoration:todo.completed?'line-through':'none'}}/>
                        </div>
                        <div>
                            <i className='delete' onClick={() => handleDelete(todo)}>X</i>
                        </div>
                    </li>
                )
            )}
            <div style={{bottom:10,position:"absolute"}}>
                <div className="todos-count">{leftTodoCount} items left</div>
            </div>
        </div>
    )
}

export default TodoList