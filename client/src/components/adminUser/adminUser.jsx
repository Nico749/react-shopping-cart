
import "./adminUser.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {format} from 'timeago.js'

  
  export default function AdminUser() {
    const location = useLocation()
    const userId = location.pathname.split('/')[3]
    const updatedUser = useSelector(state => state.client.clients.find(client => client._id === userId))
   

    const handleClick = ()=>{
      window.location.assign('/admin/home')
    }
    return (
      <div className="user">
        <div className="userTitleContainer">
        <Link to="/">
          <button className="userAddButton" onClick={handleClick}>Back </button>
        </Link>
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
             
              <div className="userShowTopTitle">
                <span className="userShowUsername">{updatedUser.username}</span>
                
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Created at</span>
              <div className="userShowInfo">
              <span className="userShowInfoTitle">{format(updatedUser.createdAt)}</span>
      
             
              </div>
              
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
     
              <span className="userShowInfoTitle">{updatedUser.mail}</span>

              </div>
              
            
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={updatedUser.username}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={updatedUser.mail}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Is Admin</label>
                  <select name="isAdmin" id="idStock">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <button className="userUpdateButton" style={{marginTop:20, width:100}}>Update</button>
                
               
              </div>
              
             
            </form>
          </div>
        </div>
      </div>
    );
  }