import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsDone = this.handleIsDone.bind(this);
    this.state = {
      id: 'id',
      title: "title",
      description: "description",
      revelance: 0,
      done: false,
    };
  }

  getTitle(){
    return this.done;
  }

  handleIsDone() {

    console.log(this.state.done)
    //if it is true
    if (this.state.done) {
      
      this.setState({
        done: false,
      });
      //if it is false
    } else {
      this.setState({
        done: true,
      });
    }
  }

  render() {
    const isDone = this.state.done;

    return (
      <div>
      
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
          <p>{this.state.revelance}</p>

          <p>{isDone ? "done" : "not done"} </p>
          <button onClick={this.handleIsDone}>click me!</button>
          
        
        
      </div>
    );
  }
}

export default Todo;
