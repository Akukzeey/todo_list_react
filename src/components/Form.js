import React from "react";
import uuid from "react-uuid";


function Form({setInputText,inputText,setTodos,todos}) {
    const unique_id = uuid()

    const onInputChange = (e) => {
        setInputText(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: inputText, completed: false, id: unique_id}])
        setInputText('')
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" onChange={onInputChange} value={inputText} placeholder="Create a new Todo" />
        </form>
    )
}

export default Form