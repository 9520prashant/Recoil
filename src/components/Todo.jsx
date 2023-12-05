import React from 'react'
import { todoListState } from '../atoms/Todos';
import { useRecoilState } from 'recoil';
import {Typography, Button, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select from '@mui/material/Select';

const Todo = ({title,id}) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString(); 

  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const getStatusColor = () => {
    const statusColors = {
      Completed: '#74edbb',
      Pending: '#e9ed74',
      Failed: '#d95a2b'
    };
  
    return statusColors[status] || '';
  };

  const handleDelete = () =>{
    for (const i in todos) {
      if(id === todos[i].id){
        const updatedTodos = todos.filter(todos => todos.id !== id);
        setTodos(updatedTodos);
    }
    }
  }
  return (
    <main className='Todo'>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant='h6'>{formattedDate}</Typography>
      <FormControl className="form-control" >
        <InputLabel className="select-table input-table" id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          onChange={handleChange}
          style={{ background: getStatusColor()}}
        >
          <MenuItem value={'Completed'}>Complete</MenuItem>
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"Failed"}>Failed</MenuItem>
        </Select>
    </FormControl>
      <Button variant="outlined" color="error" onClick={handleDelete}>-</Button>
    </main>
  )
}

export default Todo
