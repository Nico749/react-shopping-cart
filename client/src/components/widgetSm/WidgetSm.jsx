//retrieving existing users
import "./widgetSm.css";
import {useEffect, useState} from 'react'
import {format} from 'timeago.js'
import { publicRequest } from "../../requestMethods";

export default function WidgetSm() {
    const [users,setUsers] = useState([])
  
    useEffect(()=>{
      const getUsers = async ()=>{
        const res = await publicRequest.get('users/?new=true')
        setUsers(res.data)
      }
      getUsers()
    },[])
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">Existing Members</span>
        <ul className="widgetSmList">
          {/* sort user by first access */}
          {users
          .sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
          .map((user)=>(
            
          <li className="widgetSmListItem" key={user.id}>
           
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Name: {user.username}</span>
              <span className="widgetSmUserTitle">Mail: {user.mail}</span>
              <span className="widgetSmUserTitle">First Access: {format(user.createdAt)}</span>
              
            </div>
         
          </li>
         ))}
        </ul>
      </div>
    );
  }