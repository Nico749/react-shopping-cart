//retrieving existing users
import "./widgetSm.css";
import {useEffect, useState} from 'react'

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
          {users.map((user)=>(
          <li className="widgetSmListItem" key={user.id}>
           
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.mail}</span>
            </div>
         
          </li>
         ))}
        </ul>
      </div>
    );
  }