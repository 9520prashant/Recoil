import React, { useEffect, useState } from 'react'
import {Button, TextField, Typography} from "@mui/material"
import {todoListState} from "../atoms/Todos";
import { useRecoilState } from 'recoil';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [title, setTitle] = useState('');

  
  const addTodos = () =>{
    if(title !== ''){
     setTodos((prevTodos) => [...prevTodos, {id : Math.floor(Math.random()*100000), title:title}]);
    }
  }
 console.log(todos)

  return (
    <div>
       <main>
          <Typography variant='h5' className='typography'>Create a TODO:-</Typography>
          <TextField value={title} onChange={(e)=> setTitle(e.target.value)} id="filled-basic" label="Goal" variant="filled" sx={{ input: { background: "white" } }}/>
          <Button variant="contained" color="success" onClick={addTodos}>Set TODO</Button>
          <Button variant="outlined" color="error" onClick={() => setTodos([])}>Clear ALL TODO</Button>
        </main>
       {
        todos.map((value)=>{
          return (
            <>
              <Todo title={value.title} key={value.id} id = {value.id}/>
            </>
          )
        })
       }
    </div>
  )
}

export default Todos
