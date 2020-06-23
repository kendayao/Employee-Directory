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

 const handleInput = event => {
    const value =event.target.value
    SetSearchName(value)
    }
      

const filteredSearch=results.filter(users => {
        const fullName=users.name.first+" "+users.name.last
        return fullName.toLowerCase().includes(searchName.toLowerCase())
    })

const handleSubmit = event =>{
    event.preventDefault();
    const searchedUser=results.filter(function(users){
        return searchName===users.name.first+" "+users.name.last
    })
    SetResults(searchedUser) 
    SetSearchName("")
}

const directoryRequest=(() => {
    API.search().then(res =>{
    const results = res.data.results
    SetResults(results)
    })
});

const sortAscend=(() => {
    var sort= results.sort(function(a,b){
        return a.dob.age-b.dob.age
    })
    const sortAscend=sort.map(function(users){
        return(users)
    })
    SetResults(sortAscend)
})

const sortDescend = (() =>{
    var sort= results.sort(function(a,b){
        return b.dob.age-a.dob.age
    })
    const sortDescend=sort.map(function(users){
        return(users)
    })
    SetResults(sortDescend)
})

  
return (
        <div>
            <Form handleInput={handleInput}
            handleSubmit={handleSubmit}
            searchName={searchName}
            
            />

            <RenderList users={filteredSearch}
            searchName={searchName}
            sortAscend={sortAscend}
            sortDescend={sortDescend}
            />
            


        </div>
    )













}

export default RenderListContainer;