import { TextField, Box } from "@material-ui/core";
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
                    
                    
                    <TextField 
                    
                    label='Title'
                    required
                    type = "text" 
                    value ={title}  

                    onChange ={(e) => setTitle(e.target.value)} 
                    name = "title"/>
                    <br></br>
                    <br></br>
                    <TextField 
                     variant="standard"
                    required
                    label='description'
                    type = "text"
                    value ={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    name = "description" />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                    className="btn btn-primary"
                    type="button"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={sendButton} >Submit</button>
                </Box>
                </form>
                
                

                
            </div>
        );
    
        }

export default Form;