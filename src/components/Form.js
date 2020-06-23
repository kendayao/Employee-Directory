import React from "react";
import "./Form.css"
function Form(props){
return <form>
    <input type="text"
    name="searchName"
    onChange={props.handleInput}
    value={props.searchName}
    placeholder="Search Name">
    </input>
    <button onClick={props.handleSubmit}>Submit</button>
</form>

}

export default Form;