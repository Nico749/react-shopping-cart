import "./newUser.css";
import { useState } from "react";
import { addClient } from "../../redux/apiCalls";
import {useDispatch} from 'react-redux'



export default function NewUser() {
  const [user,setUser]  =useState({})
  const dispatch = useDispatch()
  const handleChange =(e)=>{
    setUser(prev=>{
     return{ ...prev, [e.target.name]:e.target.value}
    })
  }
  const handleClick = (e)=>{
    e.preventDefault()
    const newUser = {...user}
    console.log(newUser)
    addClient(newUser,dispatch)
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username"type="text" placeholder="john"  onChange={handleChange} />
        </div>
        
        <div className="newUserItem">
          <label>Email</label>
          <input name="mail"type="email" placeholder="john@gmail.com"  onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password"type="password" placeholder="password"  onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Admin</label>
          <select style={{height:"43px"}}name = "isAdmin" onChange={handleChange}>
         
         <option value ="false">No</option><option value ="true">Yes</option>
       </select>
        </div>
       
        <button onClick = {handleClick} className="newUserButton">Create</button>
      </form>
    </div>
  );
}