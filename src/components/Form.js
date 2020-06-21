import React from "react";

function Form(props){
return <form>
    <h1>{props.SearchName}</h1>
    <input type="text"
    name="searchName"
    onChange={props.handleInput}
    value={props.SearchName}
    placeholder="Search">
    </input>
    <button onClick={props.handleSubmit}>Submit</button>
</form>

}

export default Form;