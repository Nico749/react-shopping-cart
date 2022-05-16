import "./sidebar.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/apiCalls";
import {  PermIdentity} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()

    userLogout(dispatch)

  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                Create New Product
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebarListItem">
         
                Create User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
            <li onClick={handleClick} className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Log Out
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}