import "./adminHome.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/apiCalls";



import { Link } from "react-router-dom";
import AdminContainer from "../../components/adminContainer/AdminContainer";


export default function Home() {
   const dispatch = useDispatch()
  // const user = useSelector((state) => state.user.currentUser)

  const handleLogout = (e) => {
    e.preventDefault()
    userLogout(dispatch)
  }


  function showPage() {
    if ( localStorage.getItem('admin')==='true') {
      //const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin 
      return (
      
         <> 
   
         <div className="home">
          <div className="homeWidgets">
            <AdminContainer />
            <button style ={{  position:"absolute", top:0}}onClick={handleLogout} className="sidebarListItem">
              Log Out
            </button>
          </div>
        </div>
        </>
      )

    } else {
      return (
        <>
          <h1>You are not an admin!! You are not authorized to access this area</h1>
          <Link to="/" onClick={handleLogout}>Back to Home</Link>
        </>

      )

    }
  }

  return (
    <div> {showPage()} </div>

  );
}

