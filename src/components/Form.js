import React, {useState} from "react";

function Form(){

const [SearchName, SetSearchName]=useState("")

function handleInput(event){
    const value =event.target.value
    SetSearchName(value)
}

function apiRequest (event){
    event.preventDefault();
    console.log("Clicked")
}



return <form>
    <h1>{SearchName}</h1>
    <input type="text"
    name="searchName"
    onChange={handleInput}
    value={SearchName}
    placeholder="Search">
    </input>
    <button onClick={apiRequest}>Submit</button>
</form>

}

export default Form;