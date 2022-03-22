
import { unmountComponentAtNode, render } from "react-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  import { indigo } from "@material-ui/core/colors";
  
function Board(props){

    const useStyles = makeStyles((theme) => ({
        container: {
          margin: theme.spacing(3, 0, 2, 0),
          padding: theme.spacing(2),
        },
        formContainer: {
          padding: theme.spacing(2),
        },
        heading: {
        font:'arial',
        fontWeight:'600',
        textAlign: "center",
        color: indigo[500],
        marginBottom: theme.spacing(3),
        },
      }));

    const classes = useStyles();
    const [data, setData] = useState({todos: []});
    const removeItem = (todos)=> {
        console.log(props.todos)
        props.todos.splice(props, 1)
        console.log(props.todos)
        setData({todos: todos});
        //console.log(this.state.todoList)
    };
 

    return(
        <div>
            {props.todos.map((todo) => {
               
               return (
            <div key = {todo.id}>
                 <Box className={classes.container}>
                 <Grid container>
                 <Grid item xs={12}>
                 
                 <Paper elevation={3}>
                 <form  className={classes.formContainer}>
                 <form  className={classes.formContainer}>
                 <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                 <Typography variant='h4' className={classes.heading}>
                
                <h1>{todo.title}</h1>
                
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography variant='h6' className={classes.paragraph}>
                <p>{todo.description}</p>
                
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-center' }}>
                <p>{todo.id}</p>
                </Box>
               
               

               <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

                <button 
                type = "button"
                className="btn btn-primary"
                variant="contained"
                onClick={removeItem}>Delete
                
                
                </button>
                </Box>
                </form>
                </form>
                </Paper>
                
               </Grid>
               </Grid>
                </Box>
   
            </div>);
              })}
              </div>
    )
}export default Board