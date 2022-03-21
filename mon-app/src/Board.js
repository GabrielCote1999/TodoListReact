
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
                
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <p>{todo.id}</p>
               

                <button 
                type = "button"
                className="btn btn-primary"
                onClick={removeItem}>Delete
                
                </button>
   
            </div>);
              })}
              </div>
    )
}export default Board