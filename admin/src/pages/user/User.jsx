import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import "./user.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


  
  export default function User() {
    const location = useLocation()
    const userId = location.pathname.split('/')[2]
    const updatedUser = useSelector(state => state.client.clients.find(client => client._id === userId))

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
         
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

              </div>
              <div className="userUpdateRight">
                 <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }