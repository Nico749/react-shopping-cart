import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {useEffect, useState} from 'react'
import {userRequest} from '../../requestMethods' 

//retrieving existing users
export default function WidgetSm() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async ()=>{
      const res = await userRequest.get('users/?new=true')
      setUsers(res.data)
    }
    getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
        <li className="widgetSmListItem" key={user.id}>
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.mail}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
       ))}
      </ul>
    </div>
  );
}