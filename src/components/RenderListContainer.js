import React, {useState} from "react"
import Form from "./Form"

function RenderListContainer(){
    
const [SearchName, SetSearchName]=useState("")
const [Results, SetResults]=useState("")

function handleInput(event){
    const value =event.target.value
    SetSearchName(value)
}

function handleSubmit (event){
    event.preventDefault();
    console.log("Clicked")
}
    
    
return (
        <div>
            <Form handleInput={handleInput}
            handleSubmit={handleSubmit}
            SearchName={SearchName}
            />



        </div>
    )













}

export default RenderListContainer;