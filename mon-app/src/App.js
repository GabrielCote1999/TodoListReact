import Form from './Form';
import { useState } from 'react';
import Todo from './Todo';
import Board from './Board';

function App(){

    
    const [data, setData] = useState({todos: []});

    const updateData = (formParams) => {
       setData(formParams)
    }

    //Add the created todos to the list
    const addTodoData = (todo) => {
        //contain the state in a var
        let todos = data['todos'];
        //we push this todo in currentData
        todos.push(todo);
        setData({todos: todos});
        todo.id = todos.length
        console.log("this is data",data)
    }

    /*

    const removeElement = key => {
        const updateDiv = () => 
            setDivs(divs => {
                const myDivs = divs.filter(element => Number(element.key) !== key);
                return myDivs
            });
            return updateDiv;
    };

    const [key, setKey] = React.useState(1);
    const [divs, setDivs] = React.useState([
        //TODO https://codesandbox.io/s/add-and-delete-html-element-rb8wo?file=/src/App.js:539-1038
    <Board key ={0} value = {0} onRemoveElement ={removeElement(0)} /> ]);

    const handleClick = e => {
        setDivs(divs => {
          const myDivs = [...divs];
          myDivs.push(
            <MyComponent
              key={key}
              value={key}
              onRemoveElement={removeElement(key)}
            />
          );
          return myDivs;
        });
        setkey(key + 1);
      };
      */

    const deleteTodo = (todo) => {
        let todos = data['todos'];
        todos.pop();
    }

    const handler = () =>{

    }

  


    return(
        <div className='App'>
            
            <Form addTodo = { addTodoData }/>
           
            <Board 
            todos = {data["todos"]} />
            
            
        </div>
        
    );
}
export default App;