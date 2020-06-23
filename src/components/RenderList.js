import React from "react";
import "./RenderList.css"



// render list component that gets list of users and display them in a table
function RenderList(props){
return (
    <div>
    <table >
             <thead>
             <tr>
                <th>Image</th>
                <th>Name <button onClick={props.sortNameAscend}>▲</button><button onClick={props.sortNameDescend}>▼</button></th>
                <th>Phone</th>
                <th>Email</th>
                <th>Age <button onClick={props.sortAgeAscend}>▲</button><button onClick={props.sortAgeDescend}>▼</button></th>
            </tr>
            </thead>
            <tbody>
            {props.users.map(user=>{
            return <tr key={user.dob.date}>
                <td><img src={user.picture.thumbnail} alt="" /></td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
            </tr>
            })}
            </tbody>
         </table>



    </div>
)
}

export default RenderList;