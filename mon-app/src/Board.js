
import { unmountComponentAtNode, render } from "react-dom";
import { useState } from 'react';
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
            <div>
                
                <h1>Title: {todo.title}</h1>
               
                <p>Description: {todo.description}</p>
                <p>Id: {todo.id}</p>
                <button onClick={removeItem}>click here</button>
        
                
            </div>);
              })}
              </div>
    )
}export default Board