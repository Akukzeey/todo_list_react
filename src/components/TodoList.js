import React from "react";
import Todo from "./Todo";


function TodoList({todos ,setTodos, filterTodo}) {


    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodo.map((todo) => {
                    return (
                        <Todo key={todo.id} inputText={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default TodoList