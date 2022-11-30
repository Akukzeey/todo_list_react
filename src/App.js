import React, {useEffect, useState} from "react";
import './style.css'
import iconMoon from './images/icon-moon.svg'
import iconSun from './images/icon-sun.svg'
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import ActiveList from "./components/ActiveList";
import useLocalStorage from "use-local-storage";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {

    const [input,setInput]=useState('')
    const [todos,setTodos]=useState([])
    const [component,setComponent]=useState('')
    const [status,setStatus]=useState('All')
    const [filterTodos,setFilterTodos]=useState([])
    const [clearCompleted,setClearCompleted]=useState(false)
    const [theme,setTheme]=useLocalStorage("theme", 'dark', 'light')


    useEffect(()=>{
        handleFilterTodos()
    },[todos,status])

    const switchTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme)
    }

    const renderList = (e) => {
        setStatus(e.target.innerHTML)

        if (e.target.innerHTML==='Clear completed'){
            setClearCompleted(true)
        }
    }

    const handleFilterTodos = () => {
      switch (status) {
          case 'Completed':
              setFilterTodos(todos.filter(todo=>todo.completed===true))
              break;
          case 'Active':
              setFilterTodos(todos.filter(todo=>todo.completed===false))
              break;
          case 'Clear completed':
              if (clearCompleted){
                  setClearCompleted(false)
                  setTodos(todos.filter(todo=>todo.completed===false))
              }
              setFilterTodos(todos)
              break;
          default:
              setFilterTodos(todos)
      }
    }




    return(
        <div className='container' data-theme={theme}>
            <div className='container-image' >
               <div className='header-container'>
                   <h1 className='header'>Todo</h1>
                   <FontAwesomeIcon onClick={switchTheme} style={{fontSize:'30px',cursor:'pointer'}} icon={theme==='dark'?faMoon:faSun}/>
               </div>
            </div>
            <div className='form-containers'>
            <div style={{display:'flex',justifyContent:'center'}}>
                <SearchBar input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
            </div>

            <div>
                <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos}/>

                <div style={{position: 'fixed', bottom: 10,display:'flex',justifyContent:'space-between',marginLeft:90}}>
                    <div onClick={renderList}>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                        <button style={{right:0,position:'fixed'}}>Clear completed</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default App