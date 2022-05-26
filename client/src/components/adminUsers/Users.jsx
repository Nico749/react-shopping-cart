import "./adminUsers.css";
import  {React} from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteClient, getClients } from "../../redux/apiCalls";


export default function Users() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.client.clients)
  //console.log(users)

  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  
  const handleDelete = (id) => {
    deleteClient(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'mail',
      headerName: 'Mail',
      width: 200,
      editable: true,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/user/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="productListDelete"
               onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
   
  ];
  
  



  return (
    <div style={{ height: 600, width: 1100, marginTop:30, display:"flex",justifyContent:"center"}}>
       <Link to="/newUser">
        <button className="newProductButton">Create New User </button>
      </Link> 
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
       // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
