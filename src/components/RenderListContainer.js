import React, {useState, useEffect} from "react"
import Form from "./Form"
import RenderList from "./RenderList"
import API from "../utils/API"

function RenderListContainer(){
    
const [SearchName, SetSearchName]=useState("")
const [Results, SetResults]=useState([])

useEffect( () =>{
    directoryRequest();
}, []);

function handleInput(event){
    const value =event.target.value
    SetSearchName(value)
}

function handleSubmit (event){
    event.preventDefault();
    alert("clicked")
}

function directoryRequest(){
    API.search().then(function(res){
    const users = res.data.results
    SetResults(users)
    console.log(users)
    })
}
  
return (
        <div>
            <Form handleInput={handleInput}
            handleSubmit={handleSubmit}
            SearchName={SearchName}
            />

            <RenderList users={Results}/>



        </div>
    )













}

export default RenderListContainer;