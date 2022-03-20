import React, { useState } from "react";



    function Form(props){
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [id, setId] = useState(0)

   

    const sendButton = () => {
        props.addTodo({
            title: title, 
            description: description})
    }
 
        return(
            <div>
                <form >
                    <h1>Create a Todo</h1>
                    <label htmlFor='ftitle'>Title </label>
                    <input type = "text" 
                    value ={title}  
                    onChange ={(e) => setTitle(e.target.value)} 
                    name = "title"/>
                    <br></br>
                    <br></br>
                    <label htmlFor='fdescription'>description</label>
                    <input type = "text"
                    value ={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    name = "description" />

                    <button type="button" onClick={sendButton} >Submit</button>
                </form>
                
                

                
            </div>
        );
    
        }

export default Form;