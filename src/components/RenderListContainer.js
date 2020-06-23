import React, {useState, useEffect} from "react"
import Form from "./Form"
import RenderList from "./RenderList"
import API from "../utils/API"

function RenderListContainer(){
    
const [searchName, SetSearchName]=useState("")
const [results, SetResults]=useState([])

useEffect( () =>{
    directoryRequest();
}, []);

function handleInput(event){
    const value =event.target.value
    SetSearchName(value)

    const filteredSearch=results.filter(function(users){
            const fullName=users.name.first+" "+users.name.last
        return fullName.includes(searchName)
    })
    SetResults(filteredSearch)
    
    
}

function handleSubmit (event){
    event.preventDefault();
    const searchedUser=results.filter(function(users){
        return searchName===users.name.first+" "+users.name.last
    })
    SetResults(searchedUser)
    
}

function directoryRequest(){
    API.search().then(function(res){
    const users = res.data.results
    SetResults(users)
    
    })
}

function sortAscend(){
    var sort= results.sort(function(a,b){
        return a.dob.age-b.dob.age

    })

    var sortAscend=sort.map(function(users){
        return(users)
    })
   
    SetResults(sortAscend)
}

function sortDescend(){
    var sort= results.sort(function(a,b){
        return b.dob.age-a.dob.age

    })

    var sortDescend=sort.map(function(users){
        return(users)
    })
   
    SetResults(sortDescend)
}

  
return (
        <div>
            <Form handleInput={handleInput}
            handleSubmit={handleSubmit}
            searchName={searchName}
            
            />

            <RenderList users={results}
            searchName={searchName}
            sortAscend={sortAscend}
            sortDescend={sortDescend}
            />
            


        </div>
    )













}

export default RenderListContainer;