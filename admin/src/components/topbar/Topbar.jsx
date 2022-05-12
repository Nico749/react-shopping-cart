import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";
import Auth from "../../utils";


export default function Topbar() {
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
            <Settings />
          </div>
         
        </div>
      </div>
    </div>
  );
}