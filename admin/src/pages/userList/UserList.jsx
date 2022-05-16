import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, getClients } from "../../redux/apiCalls";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.client.clients)
  console.log(users)

  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  
  const handleDelete = (id) => {
    deleteClient(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 270 },
    {
      field: "username",
      headerName: "Username",
      width: 270,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            
            {params.row.username}
          </div>
        );
      },
    },
  
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 270,
    },
    {
      field: "action",
      headerName: "Action",
      width: 270,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}

      />
    </div>
  );
}