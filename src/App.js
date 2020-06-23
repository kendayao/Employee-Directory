import React from "react"
import Form from "./components/Form"
import "./App.css"
import RenderListContainer from "./components/RenderListContainer"
function App(){
 return (<div>
     <h1 className="header">Employee Directory</h1>
    <RenderListContainer />
 </div>)
}

export default App;