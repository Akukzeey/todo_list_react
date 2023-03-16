import React, {useEffect, useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import backgroundDark from "./images/bg-desktop-dark.jpg"
import backgroundLight from "./images/bg-desktop-light.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import useColorTheme from "./hooks/useColorTheme";

function App() {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [buttons, setButtons] = useState('All')
    const [filterTodo, setFilterTodo] = useState([])
    const [counter, setCounter] = useState(null)
    const [processClearCompleted, setProcessClearCompleted] = useState(false)

    const [stateTheme, changeTheme] = useColorTheme()


    useEffect(() => {
        onFilterTodo();
    }, [todos, buttons])

    const onButtonClick = (e) => {
        setButtons(e.target.innerText)

        if (e.target.innerText === 'Clear Completed'){
            setProcessClearCompleted(true)
        }
    }

    const onFilterTodo =() => {
        switch (buttons) {
            case 'Completed':
                setFilterTodo(todos.filter(todo => todo.completed === true))
                break;

            case 'Active':
                setFilterTodo(todos.filter(todo => todo.completed === false))
                break;

            case 'Clear Completed':
                if (processClearCompleted) {
                    setProcessClearCompleted(false)
                    setTodos(todos.filter(todo => todo.completed === false))
                }
                setFilterTodo(todos)
                break;

            default:
                setFilterTodo(todos)
                setCounter(todos.filter(todo => todo.completed === false).length)
                break;
        }
    }


  return (
      <div className="main-div">
          <div style={{backgroundImage: `url(${stateTheme === 'light' ? backgroundLight : backgroundDark})`}} className="bg-image">
              <header>
                  <h1>TODO</h1>
                  <button className="btn" id="theme-btn" onClick={changeTheme}>
                      <FontAwesomeIcon icon={stateTheme === 'light' ? faMoon : faSun} />
                  </button>

              </header>
              <Form
                  setInputText={setInputText}
                  inputText={inputText}
                  todos={todos}
                  setTodos={setTodos}
              />
              <div>
                  <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo}/>
              </div>

              <div>
                  <ul className="nav-choices" onClick={onButtonClick}>
                      <li className="list-item">{counter} items left</li>
                      <button className={`btn btn-outline-secondary ${buttons === "All" ? 'active' : ''} nav-buttons`}>All</button>
                      <button className={`btn btn-outline-secondary ${buttons === "Active" ? 'active' : ''} nav-buttons`}>Active</button>
                      <button className={`btn btn-outline-secondary ${buttons === "Completed" ? 'active' : ''} nav-buttons`}>Completed</button>
                      <button className={`btn btn-outline-secondary ${buttons === "Clear Completed" ? 'active' : ''} nav-buttons`}>Clear Completed</button>
                  </ul>


              </div>

          </div>
      </div>

  );
}

export default App;
