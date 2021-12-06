import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const { addTodo } = useContext(TodosContext);

function TodoForm() {
  const [value, setInputValue, reset] = useInputState('');
  console.log('TODO FORM RENDER!!!');
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={setInputValue}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
