import React from "react";
import { v4 as uuidv4 } from 'uuid';

const SearchBar = ({todos,setTodos,input,setInput}) => {

    const onFormSubmit = (event) =>{
        event.preventDefault()
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
        setInput('')
    }

  return (
      <form onSubmit={onFormSubmit}>
          <input type="text" className='search' required onChange={(event=>setInput(event.target.value))} value={input}/>
      </form>
  )
}

export default SearchBar