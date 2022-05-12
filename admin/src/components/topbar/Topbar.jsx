import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" >Nico's Admin Portal</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
         
        </div>
      </div>
    </div>
  );
}