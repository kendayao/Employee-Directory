import React, { useState } from "react";

function RenderList(props){
    console.log(props.users)
    
    return (
    <div>
     {props.users.map(function(user){
         return <table>
             <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            <tr>
                <td><img src={user.picture.thumbnail} /></td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dob.age}</td>
            </tr>
         </table>
})}


    </div>
    )
}

export default RenderList;