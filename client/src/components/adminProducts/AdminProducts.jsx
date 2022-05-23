import "./adminProducts.css";
import  {React} from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {productRows} from '../../dummydata'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 200,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
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
          <Link to={"/admin/product/" + params.row.id}>
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


export default function AdminProducts() {
  return (
    <div style={{ height: 600, width: 1000, marginTop:30, marginLeft:30 }}>
      <DataGrid
        rows={productRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
       // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
