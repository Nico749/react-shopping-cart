import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";
import Auth from "../../utils";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/apiCalls";



export default function Topbar() {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    userLogout(dispatch)

  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" >Nico's Admin Portal</span>
        </div>
        <div className="topRight">
        {/* <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a> */}
          <div className="topbarIconContainer">
          <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Logout
      </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}