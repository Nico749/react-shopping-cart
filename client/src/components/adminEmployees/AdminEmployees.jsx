import "./adminEmployees.css";
import  {React} from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteEmployee, getEmployees } from "../../redux/apiCalls";


export default function Employee() {

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees)
 
  useEffect(() => {
    getEmployees(dispatch);
  }, [dispatch]);

  
  const handleDelete = (id) => {
    deleteEmployee(id, dispatch);
  };

  const columns = [
    // { field: '_id', headerName: 'ID', width: 200 },
    {
      field: "firstName",
      headerName: "Name",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.firstName}
          </div>
        );
      },
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 130,
        editable: true,
      },
      {
        field: 'role',
        headerName: 'Role',
        width: 130,
        editable: true,
      },
    {
      field: 'mail',
      headerName: 'Mail',
      width: 130,
      editable: true,
    },
    {
        field: 'salary',
        headerName: 'Salary',
        width: 130,
        editable: true,
      },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/" + params.row._id}>
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
    <div style={{ height: 600, width: 1200, marginTop:30, display:"flex",justifyContent:"center"}}>
       <Link to="/newUser">
        <button className="newProductButton">Create New Employee </button>
      </Link> 
      <DataGrid
        rows={employees}
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
