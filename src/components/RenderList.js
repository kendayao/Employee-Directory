import React, { useState } from "react";

function RenderList(props){




//     console.log(props.users)
//     const filteredUsers= props.users.filter(function(userName){
        
//         return props.SearchName===userName.name.first
        
//     })
// console.log(filteredUsers)

return (
    <div>
        <h1>{props.searchName}</h1>
     {props.users.map(function(user){
    return (<table key={user.dob.date}>
             <thead>
             <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><img src={user.picture.thumbnail}  /></td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
            </tr>
            </tbody>
         </table>)
})}


    </div>
    )
}

export default RenderList;