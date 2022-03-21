import Form from "./Form";
import { useState } from "react";
import Todo from "./Todo";
import Board from "./Board";
import Nav from "./Nav"
import './App.css';
import {
  Box,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3, 0, 2, 0),
    padding: theme.spacing(2),
  },
  formContainer: {
    padding: theme.spacing(2),
  },
  heading: {
    textAlign: "center",
    color: indigo[500],
    marginBottom: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [data, setData] = useState({ todos: [] });

  const updateData = (formParams) => {
    setData(formParams);
  };

  //Add the created todos to the list
  const addTodoData = (todo) => {
    //contain the state in a var
    let todos = data["todos"];
    //we push this todo in currentData
    todos.push(todo);
    setData({ todos: todos });
    todo.id = todos.length;
    console.log("this is data", data);
  };

  return (
    
      <div className="App">
        
        <Nav/>
        
          <Box className={classes.container}>
        <Grid container>
        <Grid item xs={12}>
        <Paper elevation={3}>
        <form  className={classes.formContainer}>
        <Typography variant='h5' className={classes.heading}>
                {" "}
                My Todo List 
              </Typography>
        <Grid container justify='center'>
        <Grid item xs={8}>
          
            <Form addTodo={addTodoData} />

            <Board todos={data["todos"]} />
        </Grid>
        </Grid>
        </form>
        </Paper>  
        </Grid>
        </Grid>
        </Box>
        </div>
  );
}
export default App;
