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
const sortAgeAscend=(() => {
    var sortAge= results.sort(function(a,b){
        return a.dob.age-b.dob.age
    })
    const sortAgeAscend=sortAge.map(function(users){
        return(users)
    })
    SetResults(sortAgeAscend)
})

// function to sort age by descending
const sortAgeDescend = (() =>{
    var sortAge= results.sort(function(a,b){
        return b.dob.age-a.dob.age
    })
    const sortAgeDescend=sortAge.map(function(users){
        return(users)
    })
    SetResults(sortAgeDescend)
})

// function to sort name by ascending
const sortNameAscend =(()=>{
    var sortName = results.sort(function(a, b){
        if(a.name.first < b.name.first) { return -1; }
        if(a.name.first > b.name.first) { return 1; }
        return 0;

   });
    const sortNameAscend=sortName.map(function(users){
        return(users)
})
    SetResults(sortNameAscend)
})

// function to sort name by descending
const sortNameDescend =(()=>{
    var sortName = results.sort(function(a, b){
        if(a.name.first > b.name.first) { return -1; }
        if(a.name.first < b.name.first) { return 1; }
        return 0;

   });
    const sortNameDescend=sortName.map(function(users){
        return(users)
})
    SetResults(sortNameDescend)
})




// render form and render list component with props
return (
        <div>
            <Form handleInput={handleInput}
            searchName={searchName}
            />

            <RenderList users={filteredSearch}
            searchName={searchName}
            sortAgeAscend={sortAgeAscend}
            sortAgeDescend={sortAgeDescend}
            sortNameAscend={sortNameAscend}
            sortNameDescend={sortNameDescend}
            />
        </div>
    )













}

export default RenderListContainer;