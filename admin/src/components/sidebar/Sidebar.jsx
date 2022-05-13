import "./sidebar.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/apiCalls";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    
   //userLogout(dispatch)

  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Create New Product
            </li>
            </Link>
            <Link  to="/newuser" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Create User
            </li>
            </Link>
          </ul>
        </div>
     
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
            
              <li  onClick={handleClick}className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               Log Out
              </li>
            
            
          </ul>
        </div>

      </div>
    </div>
  );
}