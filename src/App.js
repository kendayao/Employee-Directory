import React from "react"
import "./App.css"
import RenderListContainer from "./components/RenderListContainer"

// App component to render header and list container
function App(){
 return (<div>
     <h1 className="header">Employee Directory</h1>
    <RenderListContainer />
 </div>)
}

export default App;