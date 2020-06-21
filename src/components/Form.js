import React, {useState} from "react";

function Form(){

const [SearchName, SetSearchName]=useState("")

function handleInput(event){
    const value =event.target.value
    SetSearchName(value)
}





return <form>
    <h1>{SearchName}</h1>
    <input type="text"
    name="searchName"
    onChange={handleInput}
    value={SearchName}
    placeholder="Search">
    </input>
    <button>Submit</button>
</form>

}

export default Form;