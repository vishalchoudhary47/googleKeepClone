import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
 const CreateNote = (props) => {
     const [note,setNote] = useState({
         title:"",
         content:"",
     });
     const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.value;

        const {value,name} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            }
        })
     }
     const addEvent = () => {
        props.passNote(note);     
        setNote({
            title:"",
            content:"",
        });               
     }
return(
    <>
        <div className="main_note">
            <form>
                <input type="text" 
                onChange={InputEvent} 
                name="title"
                value={note.title} 
                placeholder="Title" 
                />
                <textarea rows="" column="" 
                onChange={InputEvent} 
                name="content"
                value={note.content} 
                placeholder="Write a text "></textarea>
                <Button onClick ={addEvent}>
                    <AddIcon className="plus_sign" />
                </Button> 
            </form>
        </div>
    </>
)
 }
 export default CreateNote;
