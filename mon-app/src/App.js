import Form from "./Form";
import { useState } from "react";
import Todo from "./Todo";
import Board from "./Board";
import Nav from "./Nav"

function App() {
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
        <div className="card;width: 18rem;" style={{width: "18rem"}}>
            <Form addTodo={addTodoData} />

            <Board todos={data["todos"]} />
        </div>


        <section  className="vh-100;" style={{backgroundColor: "#e2d5de;"}}>
  <div className="container py-5 h-100">
    <div  className="row d-flex justify-content-center align-items-center h-100">
      <div  className="col col-xl-10">

        <div  className="card" style={{borderradius: "15px"}}>
          <div  className="card-body p-5">

            <h6  className="mb-3">Awesome Todo List</h6>

            <form  className="d-flex justify-content-center align-items-center mb-4">
              <div  className="form-outline flex-fill">
                <input type="text" id="form3"  className="form-control form-control-lg" />
                <label  className="form-label" hmltfor="form3">What do you need to do today?</label>
              </div>
              <button type="submit"  className="btn btn-primary btn-lg ms-2">Add</button>
            </form>

            <ul  className="list-group mb-0">
              <li  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div  className="d-flex align-items-center">
                  <input  className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                  Cras justo odio
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                  <i  className="fas fa-times text-primary"></i>
                </a>
              </li>
             
            </ul>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      </div>
      
 
  );
}
export default App;
