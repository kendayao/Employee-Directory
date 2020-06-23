import React, {useState, useEffect} from "react"
import Form from "./Form"
import RenderList from "./RenderList"
import API from "../utils/API"

// render list container component
function RenderListContainer(){
const [searchName, SetSearchName]=useState("")
const [results, SetResults]=useState([])

// on page load call directoryRequest function to get users from random user API and display on page
useEffect( () =>{
    directoryRequest();
}, []);

// get value typed in search field
 const handleInput = event => {
    const value =event.target.value
    SetSearchName(value)
    }
      
// get filtered array with users names matching value of search field
const filteredSearch=results.filter(users => {
        const fullName=users.name.first+" "+users.name.last
        return fullName.toLowerCase().includes(searchName.toLowerCase())
    })

// function that calls to random user API
const directoryRequest=(() => {
    API.search().then(res =>{
    const results = res.data.results
    SetResults(results)
    })
});

// function to sort age by ascending
const sortAscend=(() => {
    var sort= results.sort(function(a,b){
        return a.dob.age-b.dob.age
    })
    const sortAscend=sort.map(function(users){
        return(users)
    })
    SetResults(sortAscend)
})

// function to sort age by descending
const sortDescend = (() =>{
    var sort= results.sort(function(a,b){
        return b.dob.age-a.dob.age
    })
    const sortDescend=sort.map(function(users){
        return(users)
    })
    SetResults(sortDescend)
})

// render form and render list component
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