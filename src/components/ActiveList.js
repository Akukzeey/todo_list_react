import React from "react";

const ActiveList = ({todos,setTodos}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(todos.map((item)=>{
            if (item.id===todo.id){
                return {...item,completed:item.completed}
            }
            return  item;
        }))
    }

    const AllOfTodoList =(todos)=>{
        return (
            <>
                {todos.map((todo) => (
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
                )}</>
        )
    }

        return(
            <div style={{marginTop: '20px'}}>
                {AllOfTodoList()}
            </div>
        )
}

export default ActiveList