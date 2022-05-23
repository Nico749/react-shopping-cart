import "./adminUsers.css";
import  {React} from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {userRows} from '../../dummydata'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Mail',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Admin',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/admin/user/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlineOutlinedIcon
            className="productListDelete"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
 
];


export default function Users() {
  return (
    <div style={{ height: 600, width: 1000, marginTop:30, marginLeft:30 }}>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
       // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
